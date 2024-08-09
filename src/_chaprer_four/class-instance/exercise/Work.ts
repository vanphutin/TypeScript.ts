class Work {
  _id: number;
  title: string;
  description: string;
  status: string[];
  createAt: number;
  updateAt: number;

  constructor(
    _id: number,
    title: string,
    description: string,
    status: string[],
    createAt: number,
    updateAt: number
  ) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.createAt = createAt;
    this.updateAt = updateAt;
  }

  displayWork() {
    return `STT ${this._id}, Title : ${this.title} - description : ${this.description}`;
  }
}

let study = new Work(
  1,
  "Học bài cũ",
  "học thuộc lòng đoạn văn Việt Bắt",
  ["Hoàn thành", "Chưa hoàn thành", "Chờ đợi"],
  17,
  19
);

console.log(study.displayWork());

document.body.innerHTML = study.displayWork();
