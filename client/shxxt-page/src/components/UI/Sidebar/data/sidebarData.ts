export interface Content {
  type: "Heading" | "SubHeading";
  idx: number;
  main: string;
  belongTo?: number;
  subHeadings?: Array<Content>;
}

export default class SidebarData {
  private datas: Array<Content> = [];

  private updatedDatas: Array<Content> = [];

  public getData() {
    return [...this.datas];
  }

  // public pickContent(target: Position) {}

  // public moveContent(from: Position, to: Position) {}

  // public deleteContent(target: Positoin) {}

  public addContent(type: "Heading" | "SubHeading", target?: number) {
    if (type === "Heading") {
      const newData: Content = {
        type,
        idx: this.datas.length,
        main: "new Heading",
      };

      this.updatedDatas.push(newData);

      newData.subHeadings = [];
      this.datas.push(newData);
    } else {
      let newIdx: number;

      if (target) newIdx = this.datas[target].subHeadings?.length as number;
      else newIdx = this.datas.length;

      const newData: Content = {
        type,
        idx: newIdx,
        main: "new SubHeading",
      };

      if (target) {
        newData.belongTo = target;
        this.datas[target].subHeadings?.push(newData);
      } else this.datas.push(newData);
    }
    return undefined;
  }
}
