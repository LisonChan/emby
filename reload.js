$httpAPI("POST", "/v1/profiles/reload", {}, data => {
    $done({
        title: "Profile Reload",
        content: "配置檔案重載成功",
        icon: "arrow.triangle.2.circlepath.doc.on.clipboard",
        "icon-color": "#8B81C3",
     })
    });
