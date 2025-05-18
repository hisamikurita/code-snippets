# Coding Guidelines

## 🔵🔵🔵 HTML 🔵🔵🔵

#### 原則

- W3C標準準拠: W3C勧告に沿った、有効なHTMLコードを記述すること。
- セマンティクス: 要素の持つ意味を正しく理解し、適切なセマンティック要素を選択・使用すること。意味を持たない、あるいは内容の伴わない冗長な `div` 要素などの使用は避ける。
- アクセシビリティ: スクリーンリーダー利用者やキーボード操作者を含む全てのユーザーがコンテンツを利用できるよう、代替テキスト (`alt`) の指定、フォームコントロールとラベルの関連付け、適切な見出し構造など、基本的なアクセシビリティ要件を満たすこと。
- パフォーマンス: 不必要な要素やマークアップを避け、画像の最適化や遅延ロード (`loading="lazy"`) の活用など、読み込み速度の向上に配慮すること。

#### 準拠確認

上記原則に沿っているかは、主にプロジェクトに導入されている静的解析ツール [markuplint](https://markuplint.dev/ja/) によって確認されます。markuplint の出力する Lint エラーや警告は、修正すべき事項として扱ってください。

## 🔴🔴🔴 CSS 🔴🔴🔴

### 基本方針

以下のいずれかの方法を採用し、プロジェクト全体で統一します。

- SCSS + BEM記法: CSSプリプロセッサとしてSCSSを使用し、クラス命名規則にはBEM (Block, Element, Modifier) を採用します。
- Tailwind CSS: ユーティリティファーストのCSSフレームワークであるTailwind CSSを使用します。

### 共通原則

SCSS/BEM または Tailwind CSS のどちらを使用する場合でも、以下の原則を遵守します。


#### 1. デザイントークンの定義と利用

- 色、フォントサイズ、間隔、ブレークポイントなどのデザイントークンを定義し、CSS内で直接値をハードコーディングするのではなく、変数や設定ファイル経由で利用します。
- これにより、デザインの一貫性を保ち、後からの変更管理を容易にします。

##### Tailwind

```js
module.exports = {
  theme: {
    extend: { // 既存のテーマを拡張する場合
      colors: {
        'primary': 'oklch(45% 0.2 270)', // カスタムカラー 'primary' を定義
        'secondary': '#ff4500',
        // 他のデザイントークン（spacing, fontSizeなども同様に定義）
      }
    }
  }
  // ...その他の設定
}
```
```jsx
<button className="bg-primary">button</button>
```

##### SCSS

```scss
$color-primary: oklch(45% 0.2 270);

.button--primary {
  background-color: $color-primary;
  color: white;
}
```

---

#### 2. 再利用可能なスタイルパターンのコンポーネント化。

- 頻繁に繰り返し出現するスタイルの組み合わせを持つHTML要素は、再利用可能なコンポーネントとして抽象化し、カプセル化することを推奨します。
- これにより、コードの重複を減らし、保守性を大幅に向上させます。特にTailwind CSSを使用する場合、多くのユーティリティクラスが要素に直接記述されることを避けるために重要です。

```jsx
// Tailwindクラスが多数定義されている再利用可能なボタン
<button className="bg-yellow-700 border-2 font-semibold border border-gray-300 text-green p-4 rounded">
Custom Button
</button>

// 上の構造を何度も書くのではなく、再利用可能なコンポーネントを作成する
<CustomButton>Custom Button</CustomButton>
```

---

#### 3. スタイルの管理方針

- Tailwind
  - ユーティリティクラスの使用を基本とします。
  - ただし、多くのユーティリティクラスの組み合わせになる場合は、そのスタイルパターンをコンポーネントに集約するか、@apply ディレクティブを使用してカスタムCSSクラスに抽出することを検討します。要素のHTMLがユーティリティクラスで過度に埋め尽くされるのを避けるためです。

- SCSS + BEM
  - BEM命名規則 (block__element--modifier) に厳密に従い、クラス名から要素の役割や状態が推測できるようにします。
  - 単一のCSSプロパティのためだけの汎用的なユーティリティクラス（例: .mt-10, .text-bold など）の乱用は避け、BEMの要素やモディファイア、またはベーススタイルの中でスタイルを定義することを基本とします。

---

#### 4. SCSS使用時の追加原則

- ネストの制限
  - SCSSのネスト機能は、親セレクタに対する擬似クラス (`&:hover`, `&:focus`) や状態クラス (`&.is-active`) のスタイルを記述する場合など、必要不可欠な場面に限定して使用します。
  - 要素の構造を表すための過度なネストは避けてください。深いネストはセレクタの特異度を不必要に高め、コードの可読性、検索性、および保守性を著しく低下させます。

```scss
// NG
.hoge {
  &__title {
    color: black;
  }
}

// OK
.hoge__title {
  color: black;
}  
```

#### 準拠確認

- 上記原則のうち、構文や基本的な書式、一部の命名規則のパターンなど は、プロジェクトに静的解析ツール [stylelint](https://stylelint.io/) が導入されている場合自動的に確認されます。stylelint の出力する Lint エラーや警告は、修正必須の事項として扱ってください。
- ただし、セマンティクス、再利用性の高いパターンのコンポーネント化、命名規則のより深い意図など、stylelint だけでは完全にカバーできない原則もあります。 これらについては、コードレビュー や チーム内での共通理解 によって遵守を徹底します。

## 🟡🟡🟡 JavaScript 🟡🟡🟡

## 📷📷📷 ASSETS 🎥🎥🎥

静的アセット（画像、動画など）は、ウェブサイトのパフォーマンスに大きく影響します。以下の指針に従い、適切に処理されたアセットを使用してください。

### 画像

#### 原則

プロジェクト内で管理し配信する画像アセットは、配信前に必ず圧縮・最適化処理を行うこと。これによりファイルサイズを削減し、ページの読み込み速度を向上させます。

#### 対応例

- ツールとして、Node.jsライブラリである `sharp` や、使用しているフレームワーク（Next.jsのImageコンポーネントなど）が提供する画像最適化機能の利用を推奨します。
- 可能であれば、高い圧縮率と品質を持つ AVIF形式 を基本とし、AVIFをサポートしていないブラウザ向けに WebP形式 をフォールバックとして提供することを推奨します。
```html
<picture>
  <source srcset="/images/hoge.avif" type="image/avif" />
  <img
    src="/images/hoge.webp"
    width="1600"
    height="1200"
    alt=""
    loading="lazy"
    decoding="async"
  />
</picture>
```

### 動画

#### 原則

プロジェクト内で管理し配信する動画アセットも、配信前に必ず圧縮処理を行うこと。動画ファイルはサイズが大きくなりやすいため、適切な圧縮はページのパフォーマンスおよびユーザーのデータ通信量節約に不可欠です。

#### 対応例

- 動画の数があまり多くない場合や、簡単な圧縮のみで十分な場合は、ブラウザベースで手軽に利用できるオンライン圧縮ツール（例: [VideoSmaller](https://www.videosmaller.com/jp/)）も有効な選択肢です。
- 継続的に多数の動画を扱う場合や、より詳細な設定が必要な場合は、`FFmpeg`のようなコマンドラインツールや、専用の動画変換・最適化サービスを検討してください。

## 💡💡💡 Tips 💡💡💡

### 1. 画面外要素の不要な処理停止

#### 原則

ループアニメーションやスクロールイベントなど、要素が画面外にある間も継続的にリソースを消費する処理は、原則として要素が画面内に表示されている間のみ実行するようにします。

#### 理由

画面外で要素が動き続けたり、イベント監視が行われたりすると、ユーザーに見えない部分で不要なCPUリソースを消費し、ページのパフォーマンス低下につながる可能性があるためです。

#### 対応方法

`Intersection Observer API` を活用し、要素の画面内への出入りを検知して処理（クラスの追加/削除、イベントリスナーの追加/削除など）を制御します。

#### 実装例 (アニメーション制御)

要素が画面に入ったら特定のクラスを付与し、出たらクラスを削除する例。

```ts
const target = document.querySelector('.js-hoge') as HTMLElement;

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 要素が画面に入った場合
      target.classList.add("is-loop"); // アニメーションを開始するクラスを追加
    }
    else {
      // 要素が画面から出た場合
      target.classList.remove("is-loop"); // アニメーションを停止するクラスを削除
    }
  });
});

// 対象要素の監視を開始
io.observe(target);
```

#### 実装例 (スクロールイベント制御)

要素が画面に入ったらスクロールイベントリスナーを追加し、出たら削除する例。

```ts
const target = document.querySelector('.js-hoge') as HTMLElement;

/**
 * @description スクロール時に実行する処理
 */
const onScroll = (): void => {
    // ここにスクロールイベントで実行したい処理を記述...
    console.log("Scrolling inside target element");
}

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 要素が画面に入った場合
      // スクロールイベントリスナーを追加
      target.addEventListener("scroll", onScroll);
      console.log("Scroll listener added");
    }
    else {
      // 要素が画面から出た場合
      // スクロールイベントリスナーを削除
      target.removeEventListener("scroll", onScroll);
      console.log("Scroll listener removed");
    }
  });
});

// 対象要素の監視を開始
io.observe(target);
```

---

### 2. タッチデバイスにおける `:hover` の挙動制御

#### 問題点

標準的な `:hover` 疑似クラスは、スマートフォンやタブレットなどのタッチデバイスでは、要素をタップした際にホバー時のスタイルが適用され、再度タップするまでその状態が維持されてしまう（いわゆる「hover stuck」問題）。これにより、意図しないスタイルの残存やユーザーエクスペリエンスの低下を招く可能性があります。

#### 対応方法

ホバー操作が可能なデバイスにのみホバー時のスタイルを適用するために、CSSの `@media (any-hover: hover)` メディアクエリを使用します。

#### 実装例

```css
/* タッチデバイスなど、ホバー操作が主でないデバイスではこのスタイルは適用されない */
@media (any-hover: hover) {
  .hoge:hover {
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }
}
```

---

### 3. 狭小スクリーン（375px未満）におけるビューポートの固定

#### 目的

画面幅が非常に狭小な端末（例: 375px未満）に対するきめ細やかなレスポンシブ対応は、実装コストが増大する傾向があります。そのため、特定のブレークポイント未満の画面幅ではビューポートの表示幅を固定することで、対応範囲を限定し開発効率を高めます。

#### 対応方法

JavaScriptを用いて、`window.outerWidth` が特定の幅（例: 375px）を下回る場合に、ビューポートの `content` プロパティを固定値（例: `"width=375"`）に書き換えます。

#### 実装例

```ts
const viewport = document.querySelector('meta[name="viewport"]');

/**
 * @description ウィンドウ幅に応じてビューポートの表示幅を調整・固定する関数
 * 375px以下のウィンドウ幅では、ビューポートをwidth=375に固定します。
 */
export const viewportFix = (): void => {
  // 現在のウィンドウの外部幅を取得
  const outerWidth = window.outerWidth;

  // 375pxより大きい場合は通常のレスポンシブ設定、そうでなければ375pxに固定
  const value = outerWidth > 375 ? "width=device-width,initial-scale=1" : "width=375";

  // 現在のviewport設定と異なる場合のみ更新
  if (viewport?.getAttribute("content") !== value) {
    viewport?.setAttribute("content", value);
    console.log(`Viewport set to: ${value}`); // 確認用ログ
  }
};

// ページロード時およびウィンドウリサイズ時にviewportFix関数を実行
window.addEventListener('resize', viewportFix);
window.addEventListener('load', viewportFix);
```