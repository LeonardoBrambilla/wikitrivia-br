export interface Item {
  date_prop_id: string;          // O que aconteceu
  description: string;           // descrição atras da carta
  id: string;                    // QXXX
  image: string;                 // Imgaem normal
  instance_of: string[];         // descrição no meio da carta
  label: string;                 // Nome
  num_sitelinks: number;         // sei la
  occupations: string[] | null;  // tbm n sei
  page_views: number;            // tanto faz
  wikipedia_title: string;       // nome na wiki
  year: number;                  // Ano do acontecimento
}

export type PlayedItem = Item & {
  played: {
    correct: boolean;
  };
};
