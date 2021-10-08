1. Download the project

- git clone https://github.com/hainguyenvan6799/Kintone-DownloadAttachment.git

2. Download all packages to run:
- npm install

3. Change script in package.json with your credentials: (kintone_baseurl, kintone_username, kintone_password)
"scripts": {
    "upload": "kintone-plugin-uploader --base-url kintone_baseurl --username kintone_username --password kintone_password dist/plugin.zip --watch --waiting-dialog-ms 3000",
}

4. To start:
- npm run start

If you have some changes in source, using this command to update and run:
- npm run dev
