import parse from 'csv-parse/lib/sync'
import React from 'react'

const cdnLinks = {
  mockBizData: 'https://gw.alipayobjects.com/os/bmw-prod/2eb02d0b-993f-4531-8424-a8df1899299e.json',
  mockSellData: 'https://gw.alipayobjects.com/os/bmw-prod/22986070-97e7-43a2-a3e4-200742c3d913.json',
  ncov2019Data: 'https://gw.alipayobjects.com/os/basement_prod/8e44b543-0764-411f-adfc-0dae716ef96a.csv',
}

let appTrafficCache: Promise<any[]> = null
export function getAppTrafficData() {
  if (!appTrafficCache) {
    appTrafficCache = fetch(cdnLinks.mockBizData).then(res => res.json())
  }
  return appTrafficCache
}

let incomeCache: Promise<any[]> = null
export function getIncomeData() {
  if (!incomeCache) {
    incomeCache = fetch(cdnLinks.mockSellData).then(res => res.json())
  }
  return incomeCache
}

export interface NCoV2019Item {
  provinceName: string
  provinceEnglishName: string
  cityName: string
  cityEnglishName: string
  province_confirmedCount: string
  province_suspectedCount: string
  province_curedCount: string
  province_deadCount: string
  city_confirmedCount: string
  city_suspectedCount: string
  city_curedCount: string
  city_deadCount: string
  updateTime: string
}

let ncov2019Cache: Promise<any[]> = null
export function getNCoV2019Data() {
  if (!ncov2019Cache) {
    ncov2019Cache = fetch(cdnLinks.ncov2019Data)
      .then(res => res.text())
      .then<NCoV2019Item[]>(csvString =>
        parse(csvString, {
          columns: true,
          skip_empty_lines: true,
        }),
      )
  }
  return ncov2019Cache
}
