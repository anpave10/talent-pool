export interface TalentDetailProps {
    type: "location" | "salary"
    firstParameter :string
    secondParameter : string
    currency?: "USD" | "PEN"
}