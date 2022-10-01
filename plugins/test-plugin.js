({
    name: "example-viewer",
    displayName: "Example Viewer",
    setup({ addViewer }) {
        addViewer({
            id: "example-viewer", // The ID of your viewer
            pageTitle: "Example Viewer", // This will be shown on the top of your viewer's page
            route: "/example-viewer", // The route of your viewer's page
            formats: [], // The formats that your viewer supports
            render: (dataUrl) => <div>{dataUrl}</div> // The render of your viewer (`dataUrl` is a base64 data url)
        });
    }
})
