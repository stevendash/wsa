#!name=Bilibili签到
#!desc=B站自动签到

[Script]
B站每日任务 = type=cron,cronexp=15 9 * * *,script-path=https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/Task/BiliBili.js

#以下cookie获取方式二选其一即可
B站获取Cookie(APP) = type=http-request,pattern=^https:\/\/app\.bilibili\.com\/x\/resource\/domain\?,script-path=https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/Task/BiliBili.js

#B站获取Cookie(网页) = type=http-request,pattern=^https:\/\/m.bilibili.com/$,script-path=https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/Task/BiliBili.js

[MITM]
hostname= %APPEND% app.bilibili.com, m.bilibili.com
