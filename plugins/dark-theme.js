const i18n = {
    "zh-CN": {
        "theme.dark.name": "深色主题",
        "theme.dark.description": "全局深色主题"
    },
    "zh-TW": {
        "theme.dark.name": "暗色主題",
        "theme.dark.description": "全局暗色主題"
    },
    "en": {
        "theme.dark.name": "Dark Theme",
        "theme.dark.description": "Global Dark Theme Style"
    }
};

({
    name: "dark-theme",
    displayName: "$theme.dark.name",
    description: "$theme.dark.description",
    setup({ addStyle }) {
        document.body.setAttribute("theme", "dark");

        addStyle({
            id: "dark-theme",
            css:
`
body {
    background-color: #222;
}
.explorer .main-container *,
.explorer .sidebar-left-container *,
.explorer .sidebar-right-container *,
.explorer p.copy-info,
.header-container,
.header-container h1 {
    color: #fff !important;
}
.explorer .sidebar-left-container {
    background-color: #333 !important;
}
.explorer .left-sidebar-open,
.explorer .left-wrapper > *,
.explorer .header-button {
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    background-image: none !important;
    background-color: #fff !important;
}
.explorer .left-sidebar-panel .list-group-item::before,
.explorer .list-container .list-group-item::before {
    background-image: none !important;
    background-color: #ddd !important;
}
.explorer .list-container .list-group-item {
    background-color: transparent !important;
    border-color: #333;
}
.explorer .sidebar-right-container,
.explorer .sidebar-right-container #about {
    border-color: #333 !important;
}
.explorer .sidebar-right-container #about span {
    color: #ddd !important;
}
.explorer .sidebar-right-container #upload .filepond--drop-label label {
    color: #222 !important;
}

.dialog-container {
    background-color: #333;
    border-color: #333;
    color: #fff;
}
.settings-dialog .settings-sidebar {
    border-color: #555;
}
.settings-dialog .settings-sidebar li.on {
    color: #ddd !important;
}
.settings-dialog .settings-sidebar li:hover {
    color: #bbb !important;
}
.form-control[type=text],
.form-control[type=password],
.form-select {
    background-color: #555 !important;
    border-color: transparent;
    color: #fff !important;
    appearance:
}
.plugin-list .list-group-item {
    background-color: transparent !important;
    border-color: #555;
}
.plugin-list .list-group-item .plugin-name {
    color: #fff;
}
`
        });
    },
    i18n
})
