import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { getNCoV2019Data } from './cdn-data'
import { amount, time } from './format'

interface ProvinceItem {
  provinceName: string
  confirmedCount: number
  suspectedCount: number
  curedCount: number
  deadCount: number
  updateTime: string
  children?: CityItem[]
}

type CityItem = Omit<ProvinceItem, 'children'> & {
  cityName: string
}

const rawCols = {
  provinceName: { code: 'provinceName', name: '省份', width: 150 },
  cityName: { code: 'cityName', name: '城市', width: 150 },
  confirmedCount: { code: 'confirmedCount', name: '确诊', width: 100, render: amount, align: 'right' },
  suspectedCount: { code: 'suspectedCount', name: '疑似', width: 100, render: amount, align: 'right' },
  curedCount: { code: 'curedCount', name: '治愈', width: 100, render: amount, align: 'right' },
  deadCount: { code: 'deadCount', name: '死亡', width: 100, render: amount, align: 'right' },
  updateTime: { code: 'updateTime', name: '最后更新时间', width: 180, render: time },
} as const

const lockProvCol = { lock: true, ...rawCols.provinceName }
const lockCityCol = { lock: true, ...rawCols.cityName }
const lockTimeCol = { lock: true, ...rawCols.updateTime }
const indCols = [rawCols.confirmedCount, rawCols.curedCount, rawCols.deadCount]

export const cols = { ...rawCols, indCols, lockProvCol, lockCityCol, lockTimeCol }

export const testProvColumns = [cols.provinceName, ...cols.indCols, cols.updateTime]

export function useAllDataSource() {
  const [{ dataSource, isLoading }, setState] = useState({
    dataSource: [] as CityItem[],
    isLoading: true,
  })
  useEffect(() => {
    getNCoV2019Data().then((data) => {
      setState({
        dataSource: _.sortBy(
          data.map((rawItem) => ({
            provinceName: rawItem.provinceName,
            cityName: rawItem.cityName,
            confirmedCount: Number(rawItem.city_confirmedCount),
            suspectedCount: Number(rawItem.city_suspectedCount),
            curedCount: Number(rawItem.city_curedCount),
            deadCount: Number(rawItem.city_deadCount),
            updateTime: rawItem.updateTime,
          })),
          (d) => d.updateTime,
        ),
        isLoading: false,
      })
    })
  }, [])
  return { dataSource, isLoading }
}

export function useProvinceDataSource() {
  const [{ dataSource, isLoading }, setState] = useState({
    dataSource: [],
    isLoading: true,
  })
  useEffect(() => {
    getNCoV2019Data().then((data) => {
      const provinceItems = _.uniqBy(data, (d) => d.provinceName + '--' + d.updateTime).map<ProvinceItem>((d) => ({
        provinceName: d.provinceName,
        confirmedCount: Number(d.province_confirmedCount),
        suspectedCount: Number(d.province_suspectedCount),
        curedCount: Number(d.province_curedCount),
        deadCount: Number(d.province_deadCount),
        updateTime: d.updateTime,
      }))

      setState({
        dataSource: _.orderBy(
          Object.values(_.groupBy(provinceItems, (d) => d.provinceName)).map((data) => {
            return _.maxBy(data, (d) => d.updateTime)
          }),
          (d) => -d.confirmedCount,
        ),
        isLoading: false,
      })
    })
  }, [])
  return { dataSource, isLoading }
}

export function useCityDataSource() {
  const [{ dataSource, isLoading }, setState] = useState({
    dataSource: [] as ProvinceItem[],
    isLoading: true,
  })

  useEffect(() => {
    getNCoV2019Data().then((data) => {
      const items = Object.values(_.groupBy(data, (d) => d.provinceName)).map((byProv) => {
        const rawProvItem = _.maxBy(byProv, (d) => d.updateTime)

        const cityItems = Object.values(_.groupBy(byProv, (d) => d.cityName)).map((byCity) => {
          const rawCityItem = _.maxBy(byCity, (d) => d.updateTime)
          return {
            provinceName: rawCityItem.provinceName,
            cityName: rawCityItem.cityName,
            confirmedCount: Number(rawCityItem.city_confirmedCount),
            suspectedCount: Number(rawCityItem.city_suspectedCount),
            curedCount: Number(rawCityItem.city_curedCount),
            deadCount: Number(rawCityItem.city_deadCount),
            updateTime: rawCityItem.updateTime,
          }
        })

        const provinceItem: ProvinceItem = {
          provinceName: rawProvItem.provinceName,
          confirmedCount: Number(rawProvItem.province_confirmedCount),
          suspectedCount: Number(rawProvItem.province_suspectedCount),
          curedCount: Number(rawProvItem.province_curedCount),
          deadCount: Number(rawProvItem.province_deadCount),
          updateTime: rawProvItem.updateTime,
          children: cityItems,
        }
        return provinceItem
      })

      setState({
        dataSource: _.sortBy(items, (d) => -d.confirmedCount).flat(),
        isLoading: false,
      })
    })
  }, [])

  return { dataSource, isLoading }
}
