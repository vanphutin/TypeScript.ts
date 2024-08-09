var Work = /** @class */ (function () {
    function Work(_id, title, description, status, createAt, updateAt) {
        this._id = _id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.createAt = createAt;
        this.updateAt = updateAt;
    }
    Work.prototype.displayWork = function () {
        return "STT ".concat(this._id, ", Title : ").concat(this.title, " - description : ").concat(this.description);
    };
    return Work;
}());
var study = new Work(1, "Học bài cũ", "học thuộc lòng đoạn văn Việt Bắt", ["Hoàn thành", "Chưa hoàn thành", "Chờ đợi"], 17, 19);
console.log(study.displayWork());
document.body.innerHTML = study.displayWork();
