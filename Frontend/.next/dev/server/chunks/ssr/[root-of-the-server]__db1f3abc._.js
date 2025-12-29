module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/pages/platform.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlatformPage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [ssr] (ecmascript)");
"use client";
;
;
;
// Define Platforms with SVG Logos and Color Themes
const platforms = [
    {
        id: "AWS",
        name: "Amazon Web Services",
        color: "text-orange-500",
        bg: "hover:bg-orange-500/10 hover:border-orange-500/50",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            d: "M12.6 19.6c-1.3.8-2.9 1.3-4.7 1.3-3.6 0-6.2-2.3-6.2-5.7 0-3.6 2.8-5.9 6.2-5.9 1.9 0 3.3.6 4.3 1.5l-1.4 1.7c-.7-.7-1.7-1.2-2.9-1.2-2 0-3.5 1.5-3.5 3.8 0 2.2 1.4 3.7 3.5 3.7 1 0 1.8-.3 2.4-.7v-1.9h-2.6v-2.2h5.1v5.6zm4.9-3.9l1.7-5.5h2.6l-3.3 8.8h-2.1l-2.1-5.9-2.1 5.9h-2.1l-3.3-8.8h2.6l1.7 5.5 1.7-5.5h2.2l1.7 5.5z"
        }, void 0, false, {
            fileName: "[project]/pages/platform.js",
            lineNumber: 13,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        fields: [
            "Access Key ID",
            "Secret Access Key",
            "Region (e.g., us-east-1)"
        ]
    },
    {
        id: "Vercel",
        name: "Vercel",
        color: "text-white",
        bg: "hover:bg-zinc-100/10 hover:border-white",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            d: "M24 22.525H0l12-21.05 12 21.05z"
        }, void 0, false, {
            fileName: "[project]/pages/platform.js",
            lineNumber: 21,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        fields: [
            "Vercel Token",
            "Team ID (Optional)"
        ]
    },
    {
        id: "Azure",
        name: "Microsoft Azure",
        color: "text-blue-500",
        bg: "hover:bg-blue-500/10 hover:border-blue-500/50",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            d: "M5.6 20.3L13.2 2H21L5.6 20.3ZM2.5 17L5.5 10.9L10.3 22H2.5V17Z"
        }, void 0, false, {
            fileName: "[project]/pages/platform.js",
            lineNumber: 29,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        fields: [
            "Subscription ID",
            "Client ID",
            "Client Secret",
            "Tenant ID"
        ]
    },
    {
        id: "GCP",
        name: "Google Cloud",
        color: "text-yellow-500",
        bg: "hover:bg-yellow-500/10 hover:border-yellow-500/50",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            d: "M12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24Z"
        }, void 0, false, {
            fileName: "[project]/pages/platform.js",
            lineNumber: 37,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        fields: [
            "Project ID",
            "Service Account JSON (Base64)"
        ]
    },
    {
        id: "Docker",
        name: "Docker Hub",
        color: "text-blue-400",
        bg: "hover:bg-blue-400/10 hover:border-blue-400/50",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            d: "M13.98 9.38l-2.3 2.3-2.3-2.3 2.3-2.3 2.3 2.3zm-6.9 0l-2.3 2.3-2.3-2.3 2.3-2.3 2.3 2.3zm18.4 0l-2.3 2.3-2.3-2.3 2.3-2.3 2.3 2.3zm-6.9 0l-2.3 2.3-2.3-2.3 2.3-2.3 2.3 2.3z"
        }, void 0, false, {
            fileName: "[project]/pages/platform.js",
            lineNumber: 45,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        fields: [
            "Username",
            "Access Token"
        ]
    },
    {
        id: "Railway",
        name: "Railway",
        color: "text-purple-400",
        bg: "hover:bg-purple-500/10 hover:border-purple-500/50",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
            width: "20",
            height: "20",
            x: "2",
            y: "2",
            rx: "4"
        }, void 0, false, {
            fileName: "[project]/pages/platform.js",
            lineNumber: 53,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        fields: [
            "Railway Token"
        ]
    }
];
function PlatformPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [credentials, setCredentials] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const handleInputChange = (field, value)=>{
        setCredentials((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const handleDeploy = async ()=>{
        if (!selected) return alert("Please select a platform");
        // Validate fields
        for (const field of selected.fields){
            if (!credentials[field]) return alert(`Please enter ${field}`);
        }
        const repo = localStorage.getItem("github_repo_url");
        if (!repo) {
            alert("GitHub repo info missing. Please restart the flow.");
            router.push("/github");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("http://localhost:3005/api/deployments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    repo: repo,
                    platform: selected.id,
                    credentials: credentials
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Deployment failed");
            localStorage.setItem("deployment_id", data._id);
            // Simulate Authentication Handshake
            setTimeout(()=>{
                router.push("/dashboard");
            }, 1500);
        } catch (err) {
            alert(err.message);
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen w-full items-center justify-center bg-zinc-950 px-4 py-12 font-sans text-zinc-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "w-full max-w-4xl space-y-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold tracking-tight text-white sm:text-4xl",
                            children: "Choose Your Destination"
                        }, void 0, false, {
                            fileName: "[project]/pages/platform.js",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-zinc-400",
                            children: [
                                "Select a cloud provider to securely deploy ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-zinc-200 font-mono bg-zinc-900 px-2 py-0.5 rounded",
                                    children: ("TURBOPACK compile-time value", "undefined") !== 'undefined' && localStorage.getItem('github_repo_url') ? "TURBOPACK unreachable" : 'your-repo'
                                }, void 0, false, {
                                    fileName: "[project]/pages/platform.js",
                                    lineNumber: 121,
                                    columnNumber: 60
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/platform.js",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/platform.js",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3",
                    children: platforms.map((p)=>{
                        const isSelected = selected?.id === p.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            onClick: ()=>{
                                setSelected(p);
                                setCredentials({});
                            },
                            className: `group cursor-pointer rounded-xl border p-6 transition-all duration-200 
                  ${isSelected ? "border-blue-500 bg-blue-500/10 ring-1 ring-blue-500 scale-[1.02]" : `border-zinc-800 bg-zinc-900/50 ${p.bg}`}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center gap-4 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        className: `h-12 w-12 transition-transform duration-300 group-hover:scale-110 ${isSelected ? p.color : "text-zinc-500 group-hover:" + p.color}`,
                                        children: p.icon
                                    }, void 0, false, {
                                        fileName: "[project]/pages/platform.js",
                                        lineNumber: 142,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: `font-semibold ${isSelected ? "text-white" : "text-zinc-300 group-hover:text-white"}`,
                                            children: p.name
                                        }, void 0, false, {
                                            fileName: "[project]/pages/platform.js",
                                            lineNumber: 150,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/pages/platform.js",
                                        lineNumber: 149,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/platform.js",
                                lineNumber: 141,
                                columnNumber: 17
                            }, this)
                        }, p.id, false, {
                            fileName: "[project]/pages/platform.js",
                            lineNumber: 132,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/pages/platform.js",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "animate-in fade-in slide-in-from-bottom-4 duration-500 mx-auto max-w-lg rounded-2xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-2xl backdrop-blur-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "mb-6 flex items-center gap-3 border-b border-zinc-800 pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: `flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 ${selected.color}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        className: "h-5 w-5",
                                        children: selected.icon
                                    }, void 0, false, {
                                        fileName: "[project]/pages/platform.js",
                                        lineNumber: 166,
                                        columnNumber: 24
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pages/platform.js",
                                    lineNumber: 165,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-white",
                                            children: [
                                                "Configure ",
                                                selected.id
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/platform.js",
                                            lineNumber: 169,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-zinc-500",
                                            children: "Credentials are encrypted before transmission."
                                        }, void 0, false, {
                                            fileName: "[project]/pages/platform.js",
                                            lineNumber: 170,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/platform.js",
                                    lineNumber: 168,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/platform.js",
                            lineNumber: 164,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: selected.fields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            className: "mb-1.5 block text-xs font-medium text-zinc-400 uppercase tracking-wider",
                                            children: field
                                        }, void 0, false, {
                                            fileName: "[project]/pages/platform.js",
                                            lineNumber: 177,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                            type: field.toLowerCase().includes("token") || field.toLowerCase().includes("secret") || field.toLowerCase().includes("key") ? "password" : "text",
                                            value: credentials[field] || "",
                                            onChange: (e)=>handleInputChange(field, e.target.value),
                                            className: "block w-full rounded-lg border border-zinc-700 bg-black/50 py-2.5 px-3 text-sm text-white placeholder:text-zinc-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all",
                                            placeholder: `Enter ${field}...`
                                        }, void 0, false, {
                                            fileName: "[project]/pages/platform.js",
                                            lineNumber: 180,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, field, true, {
                                    fileName: "[project]/pages/platform.js",
                                    lineNumber: 176,
                                    columnNumber: 25
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/pages/platform.js",
                            lineNumber: 174,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: handleDeploy,
                            disabled: loading,
                            className: "mt-8 w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/20 hover:from-blue-500 hover:to-indigo-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                        className: "animate-spin h-4 w-4 text-white",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                                                className: "opacity-25",
                                                cx: "12",
                                                cy: "12",
                                                r: "10",
                                                stroke: "currentColor",
                                                strokeWidth: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/platform.js",
                                                lineNumber: 198,
                                                columnNumber: 145
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                className: "opacity-75",
                                                fill: "currentColor",
                                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/platform.js",
                                                lineNumber: 198,
                                                columnNumber: 246
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/platform.js",
                                        lineNumber: 198,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        children: "Authenticating & Deploying..."
                                    }, void 0, false, {
                                        fileName: "[project]/pages/platform.js",
                                        lineNumber: 199,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true) : "Initialize Deployment Pipeline"
                        }, void 0, false, {
                            fileName: "[project]/pages/platform.js",
                            lineNumber: 191,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/platform.js",
                    lineNumber: 162,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pages/platform.js",
            lineNumber: 115,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pages/platform.js",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__db1f3abc._.js.map