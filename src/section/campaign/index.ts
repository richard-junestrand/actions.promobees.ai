export type ChangedData<T>={
    changed_at: any
    data: T
}
export type CampaignDataInput=ChangedData<ChangedData<any>[]>

export type CampaignInput = {
    campaign_name: string
    campaign_type_id: number
    source: any
    data: CampaignDataInput
    specification: any
    budget: any
    is_active: boolean
    connection_id: number
}

export enum CampaignType {
    MetaCarousel=10
}