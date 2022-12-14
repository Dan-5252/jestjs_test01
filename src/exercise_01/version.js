/*
 * UT-codeCAMP
 * ワーク用プロダクトコード
 *
 * Javaのバージョニング
 *
 */
export class Version {
  constructor(expression) {
    var p = expression.split(".");

    // 要素数チェック
    if (expression === "" || p.length < 1 || p.length > 4) {
      throw new Error("invalid expression");
    }

    for (var i = 0; i < p.length; i++) {
      // 数値チェックと値チェック
      if (isNaN(Number(p[i]))) {
        throw new Error("invalid expression");
      } else if (Number(p[i]) < 0 || Number(p[i]) > 999) {
        throw new Error("invalid number");
      }
    }

    // 要素の取得
    this.feature = Number(p[0]);
    if (p.length === 1) {
      this.interim = 0;
      this.update = 0;
      this.patch = 0;
    } else if (p.length === 2) {
      this.interim = Number(p[1]);
      this.update = 0;
      this.patch = 0;
    } else if (p.length === 3) {
      this.interim = Number(p[1]);
      this.update = Number(p[2]);
      this.patch = 0;
    } else {
      this.interim = Number(p[1]);
      this.update = Number(p[2]);
      this.patch = Number(p[3]);
    }

    // 機能リリース・バージョンの下限チェック
    if (this.feature < 10) {
      throw new Error("Major versions smaller than 10 are invalid");
    }

    // ゼロ末尾は誤り
    if (p.length === 2 && Number(p[1]) === 0) {
      throw new Error("Zero interim shoulde be omitted");
    } else if (p.length === 3 && Number(p[2]) === 0) {
      throw new Error("Zero update shoulde be omitted");
    } else if (p.length === 4 && Number(p[3]) === 0) {
      throw new Error("Zero patch shoulde be omitted");
    }
  }

  // 数値化
  get value() {
    return Number(
      ("000" + this.feature).slice(-3) +
        ("000" + this.interim).slice(-3) +
        ("000" + this.update).slice(-3) +
        ("000" + this.patch).slice(-3)
    );
  }

  // バージョン比較
  // 要素をゼロサプレス(000)で連結した数値に変換して比較する
  compare(expression) {
    var versionNum1 = this.value;
    var versionNum2 = new Version(expression).value;
    if (versionNum1 === versionNum2) {
      return 0;
    } else if (versionNum1 > versionNum2) {
      return 1;
    } else {
      return -1;
    }
  }
}
