# expressでfirebaseAuthのJWT認証を行うミドルウェアのデモ
でも

## サーバーの起動
1. firebaseのプロジェクト設定ページから，サービスアカウントの秘密鍵jsonをダウンロードする
2. ダウンロードしたjsonを`secret/firebase-secrets.json`に配置する
3. `npm install`で依存関係をインストールする
4. `npm run dev`でサーバーを起動する

## JWT認証のテスト
1. firebase側でメール/パスワード認証のユーザーを作っておく
2. `.env.loginscript.example`を`.env.loginscript`にリネームし，firebaseの認証情報を記入する
3. `npm run login`でうまくいくとJWTが得られます
4. お好きなHTTPクライアントで`GET http://localhost:3000/protected`にリクエストしてください
