export interface BookMarkInterface {
  id: string;
  link: string;
  title: string;
  linkForIframe: string;
  group: string;
  img?: string;
}

export interface TableFinal {
  group: string;
  groups: BookMarkInterface[];
}
export interface groupDetail{
  group: string;
  img?: string;
}
