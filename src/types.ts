import { Maybe } from "true-myth";

// Form definition
export interface CostsSection {
  name: string;
}

export interface Activity {
  name: string;
  sections: Array<CostsSection>;
}

export interface Group {
  name: string;
  activities: Array<string>;
}

// Form values
export interface CostFormData {
  quantity: number;
  value: number;
  comment: string;
}
