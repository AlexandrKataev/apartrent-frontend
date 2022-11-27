export interface estateListState {
  estateList: estateItem[];
  status: string | null;
}

export type FetchProgressArgs = string;

export interface estateItem {
  id: number;
  name: string;
  description: string;
  buyPrice: number;
  rentPayment: number;
  status: string;
  lastUpdated: string;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

// export interface "EstateGridDto": {
// 	"type": "object",
// 	"properties": {
// 		"id": {
// 			"type": "integer",
// 			"format": "int32"
// 		},
// 		"name": {
// 			"type": "string",
// 			"nullable": true
// 		},
// 		"buyPrice": {
// 			"type": "number",
// 			"format": "double"
// 		},
// 		"rentPayment": {
// 			"type": "number",
// 			"format": "double"
// 		},
// 		"lastUpdated": {
// 			"type": "string",
// 			"format": "date-time"
// 		},
// 		"status": {
// 			"$ref": "#/components/schemas/EstateStatus"
// 		}
// 	},
// 	"additionalProperties": false
// },
