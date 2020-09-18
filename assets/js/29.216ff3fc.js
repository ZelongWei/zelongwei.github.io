(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{636:function(e,t,a){"use strict";a.r(t);var s=a(4),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[e._v("#")]),e._v(" 概念")]),e._v(" "),a("h4",{attrs:{id:"deployment-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployment-是什么"}},[e._v("#")]),e._v(" Deployment 是什么？")]),e._v(" "),a("p",[e._v("Deployment 为 Pod 和 Replica Set（二代 Replication Controller）提供声明式更新，替代以前的 ReplicationController 来方便的管理应用。你只需要在 Deployment 中描述你想要的目标状态是什么，Deployment controller 就会帮你将 Pod 和 Replica Set 的实际状态改变到你的目标状态。你可以定义一个全新的 Deployment，也可以创建一个新的替换旧的 Deployment。")]),e._v(" "),a("h4",{attrs:{id:"deployment能做什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployment能做什么"}},[e._v("#")]),e._v(" Deployment能做什么？")]),e._v(" "),a("ul",[a("li",[e._v("定义 Deployment 来创建 ReplicaSet 和 pod")]),e._v(" "),a("li",[e._v("滚动升级和回滚应用")]),e._v(" "),a("li",[e._v("扩容和缩容")]),e._v(" "),a("li",[e._v("暂停和继续 Deployment")])]),e._v(" "),a("h3",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),a("h4",{attrs:{id:"创建-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-deployment"}},[e._v("#")]),e._v(" 创建 Deployment")]),e._v(" "),a("p",[e._v("nginx-deployment.yaml")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" apps/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Deployment\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("deployment\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nginx\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("replicas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("matchLabels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nginx\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nginx\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nginx\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("1.7.9\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("\n")])])]),a("p",[e._v("执行以上文件创建或者覆盖deployment")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("kubectl create -f nginx-deployment.yaml --record -n mynamespace\n")])])]),a("p",[e._v("参数"),a("code",[e._v("record")]),e._v("可选，加上的话会记录这个Deployment的执行命令，后续可以使用 Deployment revision 查看该资源执行了哪些命令")]),e._v(" "),a("p",[e._v("参数"),a("code",[e._v("n")]),e._v("或者 "),a("code",[e._v("namespace")]),e._v(" 可选，选择部署到那个命名空间，如果不写那么会部署到默认default命名空间")]),e._v(" "),a("h4",{attrs:{id:"更新-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新-deployment"}},[e._v("#")]),e._v(" 更新 Deployment")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("直接使用命令更新")]),e._v(" "),a("p",[e._v("kubectl set image deployment/nginx-deployment nginx=nginx:1.9.1")]),e._v(" "),a("p",[a("code",[e._v("deployment/nginx-deployment")]),e._v(" 是deployment文件部署后的名称")]),e._v(" "),a("p",[a("code",[e._v("nginx=nginx:1.9.1")]),e._v(" 修改容器名称叫做nginx的镜像版本")])]),e._v(" "),a("li",[a("p",[e._v("直接修改配置更新")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("kubectl edit deployment/nginx-deployment\n")])])]),a("p",[a("code",[e._v("deployment/nginx-deployment")]),e._v(" 是deployment文件部署后的名称")])])]),e._v(" "),a("h4",{attrs:{id:"回退-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回退-deployment"}},[e._v("#")]),e._v(" 回退 Deployment")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("回退当前的 rollout 到之前的版本")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("kubectl rollout undo deployment/nginx-deployment\n")])])])]),e._v(" "),a("li",[a("p",[e._v("回退到指定某个历史版本")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("kubectl rollout undo deployment/nginx-deployment --to-revision"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n")])])]),a("p",[e._v("参数"),a("code",[e._v("to-revision")]),e._v("是可以使用以下命令获取")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ kubectl rollout "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("history")]),e._v(" deployment/nginx-deployment\ndeployments "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nginx-deployment"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v("\nREVISION    CHANGE-CAUSE\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("           kubectl create -f docs/user-guide/nginx-deployment.yaml --record\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("           kubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" image deployment/nginx-deployment "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("nginx")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("nginx:1.9.1\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("           kubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" image deployment/nginx-deployment "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("nginx")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("nginx:1.91\n")])])]),a("p",[e._v("这里可以看到因为我们创建 Deployment 的时候使用了 "),a("code",[e._v("—recored")]),e._v(" 参数可以记录命令，我们可以很方便的查看每次 revison 的变化。")]),e._v(" "),a("p",[a("strong",[e._v("注意：")]),e._v(" 只要 Deployment 的 rollout 被触发就会创建一个 revision。也就是说当且仅当 Deployment 的 Pod template（如 "),a("code",[e._v(".spec.template")]),e._v("）被更改，例如更新 template 中的 label 和容器镜像时，就会创建出一个新的 revision。其他的更新，比如"),a("strong",[e._v("扩容 Deployment 不会创建 revision")]),e._v("——因此我们可以很方便的手动或者自动扩容。这意味着当你回退到历史 revision 时，只有 Deployment 中的 Pod template 部分才会回退。")])])]),e._v(" "),a("h4",{attrs:{id:"扩容deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩容deployment"}},[e._v("#")]),e._v(" 扩容Deployment")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("扩(缩)容到指定份数")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("kubectl scale deployment/nginx-deployment --replicas "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v("\n")])])])]),e._v(" "),a("li",[a("p",[e._v("弹性扩容，基于当前 Pod 的 CPU 利用率选择最少和最多的 Pod 数")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("kubectl autoscale deployment/nginx-deployment --min"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" --max"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(" --cpu-percent"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("\n")])])])])]),e._v(" "),a("h4",{attrs:{id:"查看详情-describe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看详情-describe"}},[e._v("#")]),e._v(" 查看详情 describe")]),e._v(" "),a("ul",[a("li",[e._v("查看deployment详情信息")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("kubecetl describe deployment/nginx-deployment\n")])])]),a("ul",[a("li",[a("p",[e._v("查看pod详细信息")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("kubecetl describe pod/nginx-deployment-59cf5847f6-5kfjc\n")])])])])]),e._v(" "),a("h4",{attrs:{id:"手动重启pod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动重启pod"}},[e._v("#")]),e._v(" 手动重启pod")]),e._v(" "),a("p",[e._v("如果你是使用的deployment部署的pod，那么可以直接delete删除你要重启的pod，此时deployment会检测到期望的pod数量少了，那么他会马上又启动一个新pod")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("kubectl delete pod/nginx-deployment-59cf5847f6-5kfjc\n")])])]),a("h3",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[e._v("#")]),e._v(" 说明")]),e._v(" "),a("h4",{attrs:{id:"pod-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pod-template"}},[e._v("#")]),e._v(" Pod Template")]),e._v(" "),a("p",[a("code",[e._v(".spec.template")]),e._v(" 是 "),a("code",[e._v(".spec")]),e._v(" 中唯一要求的字段。")]),e._v(" "),a("p",[a("code",[e._v(".spec.template")]),e._v(" 是 pod template 它跟 Pod类型一模一样，除了它是嵌套的并且不需要 "),a("code",[e._v("apiVersion")]),e._v(" 和 "),a("code",[e._v("kind")]),e._v(" 字段。另外为了划分 Pod 的范围，Deployment 中的 pod template 必须指定适当的 label（不要跟其他 controller 重复了）和适当的重启策略。")]),e._v(" "),a("p",[a("code",[e._v(".spec.template.spec.restartPolicy")]),e._v("可以设置为 "),a("code",[e._v("Always")]),e._v(" , 如果不指定的话这就是默认配置。")]),e._v(" "),a("h4",{attrs:{id:"replicas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replicas"}},[e._v("#")]),e._v(" Replicas")]),e._v(" "),a("p",[a("code",[e._v(".spec.replicas")]),e._v(" 是可以选字段，指定期望的 pod 数量，默认是 1。")]),e._v(" "),a("h4",{attrs:{id:"selector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selector"}},[e._v("#")]),e._v(" Selector")]),e._v(" "),a("p",[a("code",[e._v(".spec.selector")]),e._v(" 是可选字段，用来指定 label selector ，圈定 Deployment 管理的 pod 范围。")]),e._v(" "),a("p",[e._v("如果被指定， "),a("code",[e._v(".spec.selector")]),e._v(" 必须匹配 "),a("code",[e._v(".spec.template.metadata.labels")]),e._v("，否则它将被 API 拒绝。如果 "),a("code",[e._v(".spec.selector")]),e._v(" 没有被指定， "),a("code",[e._v(".spec.selector.matchLabels")]),e._v(" 默认是 "),a("code",[e._v(".spec.template.metadata.labels")]),e._v("。")]),e._v(" "),a("p",[e._v("在 Pod 的 template 跟 "),a("code",[e._v(".spec.template")]),e._v(" 不同或者数量超过了 "),a("code",[e._v(".spec.replicas")]),e._v(" 规定的数量的情况下，Deployment 会杀掉 label 跟 selector 不同的 Pod。")]),e._v(" "),a("p",[a("strong",[e._v("注意：")]),e._v(" 你不应该再创建其他 label 跟这个 selector 匹配的 pod，或者通过其他 Deployment，或者通过其他 Controller，例如 ReplicaSet 和 ReplicationController。否则该 Deployment 会被把它们当成都是自己创建的。Kubernetes 不会阻止你这么做。")]),e._v(" "),a("p",[e._v("如果你有多个 controller 使用了重复的 selector，controller 们就会互相打架并导致不正确的行为。")])])}),[],!1,null,null,null);t.default=n.exports}}]);