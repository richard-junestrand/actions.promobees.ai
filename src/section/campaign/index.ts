export type ChangedInput<T>=T & {
    changed_at: any
}
export type ChangedData<T>=ChangedInput<{
    data: T
}>
export type CampaignDataInput=ChangedData<ChangedData<any>[]>

export type CampaignInput = {
    campaign_name?: string
    campaign_type_id?: number
    source?: any
    data: CampaignDataInput
    specification?: any
    budget?: any
    is_active?: boolean
    connection_id?: number
    apply_template?: number
}

export enum CampaignType {
    MetaCarousel=10
}

export enum CampaignApply {
    InOrder = 1,
    Randomly = 2
}