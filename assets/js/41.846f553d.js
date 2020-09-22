(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{649:function(t,s,a){"use strict";a.r(s);var n=a(4),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ubuntu安装rabbitmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu安装rabbitmq"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Ubuntu安装RabbitMQ")])]),t._v(" "),a("h2",{attrs:{id:"_1-环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-环境准备"}},[t._v("#")]),t._v(" 1.环境准备")]),t._v(" "),a("p",[t._v("由于RabbitMQ采用的Erlang语言编写的，故需先安装Erlang")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("更新软件列表")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n")])])])]),t._v(" "),a("li",[a("p",[t._v("安装Erlang")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" erlang-nox \n")])])])])]),t._v(" "),a("h2",{attrs:{id:"_2-安装rabbitmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装rabbitmq"}},[t._v("#")]),t._v(" "),a("strong",[t._v("2.安装")]),t._v("RabbitMQ")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("添加rabbitmq的仓库列表配置文件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("echo 'deb http://www.rabbitmq.com/debian/ testing main' | sudo tee /etc/apt/sources.list.d/rabbitmq.list\n")])])])]),t._v(" "),a("li",[a("p",[t._v("加入rabbitmq signing key")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -\n")])])])]),t._v(" "),a("li",[a("p",[t._v("更新软件列表")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo apt-get update\n")])])])]),t._v(" "),a("li",[a("p",[t._v("安装RabbitMq，安装完之后rabbitmq默认已启动")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo apt-get install rabbitmq-server\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"_3-启用插件管理功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-启用插件管理功能"}},[t._v("#")]),t._v(" 3.启用插件管理功能")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("启用web管理插件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo rabbitmq-plugins enable rabbitmq_management\n")])])])]),t._v(" "),a("li",[a("p",[t._v("重启rabbitmq服务(这一步容易发生错误，第6步有本人安装过程中发生的错误不知道对大家是否有帮助)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo systemctl restart rabbitmq-server\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"_4-添加账号配置权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-添加账号配置权限"}},[t._v("#")]),t._v(" 4.添加账号配置权限")]),t._v(" "),a("h3",{attrs:{id:"_4-1-账号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-账号"}},[t._v("#")]),t._v(" 4.1.账号")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("添加账号，这里的账号是admin，密码是19961225")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" rabbitmqctl add_user admin "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("19961225")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("可以使用该条命令查看账号列表，其中(guest)为默认游客账户，账号密码都是guest")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" rabbitmqctl list_users\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"_4-2-权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-权限"}},[t._v("#")]),t._v(" 4.2.权限")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("授权")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" rabbitmqctl  set_permissions -p / admin "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.*'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.*'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.*'")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("查看权限列表")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" rabbitmqctl list_permissions -p /\n")])])])]),t._v(" "),a("li",[a("p",[t._v("赋予administrator角色")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" rabbitmqctl set_user_tags admin administrator\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"_5-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-常用命令"}},[t._v("#")]),t._v(" 5.常用命令")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("启动rabbitMq服务")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" rabbitmq-server start\n")])])]),a("p",[t._v("后台运行启动")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" rabbitmq-server -detached\n")])])])]),t._v(" "),a("li",[a("p",[t._v("停止rabbitMq服务")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" rabbitmq-server stop\n")])])])]),t._v(" "),a("li",[a("p",[t._v("重启rabbitMq服务")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" rabbitmq-server restart\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"_6-问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-问题"}},[t._v("#")]),t._v(" 6.问题")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在操作RabbitMq服务时出现error，无论是启动，重启，停止，都会出现以下问题")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("ERROR: node with name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rabbit"')]),t._v(" already running on "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxxxx"')]),t._v("\n")])])]),a("p",[a("strong",[t._v("解决方法")])]),t._v(" "),a("p",[a("code",[t._v("ps -ef|grep rabbit")]),t._v("找到RabbitMq进程，全部kill，然后再重启"),a("code",[t._v("rabbitmq-server start")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('root@xxxxxxxxx:/etc/rabbitmq# ps -ef|grep rabbit\nrabbitmq  4328     1  0 15:30 ?        00:00:00 /bin/sh /usr/sbin/rabbitmq-server\nrabbitmq  4333  4328  0 15:30 ?        00:00:00 /bin/sh /usr/lib/rabbitmq/bin/rabbitmq-server\nrabbitmq  4485     1  0 15:30 ?        00:00:00 /usr/lib/erlang/erts-9.2/bin/epmd -daemon\nrabbitmq  4589  4333  0 15:30 ?        00:00:04 /usr/lib/erlang/erts-9.2/bin/beam.smp -W w -A 64 -P 1048576 -t 5000000 -stbt db -zdbbl 32000 -K true -B i -- -root /usr/lib/erlang -progname erl -- -home /var/lib/rabbitmq -- -pa /usr/lib/rabbitmq/lib/rabbitmq_server-3.6.10/ebin -noshell -noinput -s rabbit boot -sname rabbit@xxxxxxxxx -boot start_sasl -kernel inet_default_connect_options [{nodelay,true}] -sasl errlog_type error -sasl sasl_error_logger false -rabbit error_logger {file,"/var/log/rabbitmq/rabbit@xxxxxxxxx.log"} -rabbit sasl_error_logger {file,"/var/log/rabbitmq/rabbit@xxxxxxxxx-sasl.log"} -rabbit enabled_plugins_file "/etc/rabbitmq/enabled_plugins" -rabbit plugins_dir "/usr/lib/rabbitmq/plugins:/usr/lib/rabbitmq/lib/rabbitmq_server-3.6.10/plugins" -rabbit plugins_expand_dir "/var/lib/rabbitmq/mnesia/rabbit@xxxxxxxxx-plugins-expand" -os_mon start_cpu_sup false -os_mon start_disksup false -os_mon start_memsup false -mnesia dir "/var/lib/rabbitmq/mnesia/rabbit@xxxxxxxxx" -kernel inet_dist_listen_min 25672 -kernel inet_dist_listen_max 25672\nrabbitmq  4714  4589  0 15:30 ?        00:00:00 erl_child_setup 65536\nrabbitmq  4769  4714  0 15:30 ?        00:00:00 inet_gethost 4\nrabbitmq  4770  4769  0 15:30 ?        00:00:00 inet_gethost 4\nroot      6940  3172  0 15:57 pts/0    00:00:00 grep --color=auto rabbit\nroot@xxxxxxxxx:/etc/rabbitmq# kill 4328\nroot@xxxxxxxxx:/etc/rabbitmq# kill 4333\n-bash: kill: (4333) - No such process\nroot@xxxxxxxxx:/etc/rabbitmq# kill 4485\n-bash: kill: (4485) - No such process\nroot@xxxxxxxxx:/etc/rabbitmq# ps -ef|grep rabbit\nrabbitmq  7225     1  0 15:58 ?        00:00:00 /usr/lib/erlang/erts-9.2/bin/epmd -daemon\nroot      7256  3172  0 15:58 pts/0    00:00:00 grep --color=auto rabbit\nroot@xxxxxxxxx:/etc/rabbitmq# kill 7225\nroot@xxxxxxxxx:/etc/rabbitmq# ps -ef|grep rabbit\nroot      7258  3172  0 15:58 pts/0    00:00:00 grep --color=auto rabbit\nroot@xxxxxxxxx:/etc/rabbitmq# sudo rabbitmq-server start\n\n              RabbitMQ 3.6.10. Copyright (C) 2007-2017 Pivotal Software, Inc.\n  ##  ##      Licensed under the MPL.  See http://www.rabbitmq.com/\n  ##  ##\n  ##########  Logs: /var/log/rabbitmq/rabbit@xxxxxxxxx.log\n  ######  ##        /var/log/rabbitmq/rabbit@xxxxxxxxx-sasl.log\n  ##########\n              Starting broker...\n completed with 6 plugins.\n')])])]),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_27383857/article/details/105143928",target:"_blank",rel:"noopener noreferrer"}},[t._v("感谢大佬解答"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("启动rabbitmq报错Failed to start RabbitMQ broker")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("Jun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:12 sf206152 rabbitmq-server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31112")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("bad_return,\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:12 sf206152 rabbitmq-server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31112")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rabbit,start,"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("normal,"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:12 sf206152 rabbitmq-server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31112")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EXIT'")]),t._v(",\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:12 sf206152 rabbitmq-server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31112")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rabbit,failure_during_boot,\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:12 sf206152 rabbitmq-server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31112")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("error,\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:12 sf206152 rabbitmq-server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31112")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("schema_integrity_check_failed,\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:12 sf206152 rabbitmq-server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31112")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("table_attributes_mismatch,rabbit_user,\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:12 sf206152 rabbitmq-server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31112")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("username,password_hash,tags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:12 sf206152 rabbitmq-server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31112")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("username,password_hash,tags,\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:12 sf206152 rabbitmq-server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31112")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": hashing_algorithm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:12 sf206152 rabbitmq-server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31112")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": Log files "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("may contain "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" information"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:12 sf206152 rabbitmq-server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31112")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": /var/log/rabbitmq/rabbit@sf206152.log\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:12 sf206152 rabbitmq-server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31112")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": /var/log/rabbitmq/rabbit@sf206152-sasl.log\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:13 sf206152 rabbitmq-server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31112")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"init terminating in do_boot"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rabbit,failure_during_boot,"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("could_not_start,rabbit,"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("bad_return,"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rabbit,start,"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("normal,"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EXIT'")]),t._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rabbit,failure_du\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:14 sf206152 rabbitmq-server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31112")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": Crash dump was written to: erl_crash.dump\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:14 sf206152 rabbitmq-server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31112")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": init terminating "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" do_boot "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:14 sf206152 systemd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": rabbitmq-server.service: main process exited, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("code")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("exited, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("status")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/FAILURE\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:14 sf206152 rabbitmqctl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31207")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": Stopping and halting node rabbit@sf206152 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:14 sf206152 rabbitmqctl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31207")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": Error: unable to connect to node rabbit@sf206152: nodedown\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:14 sf206152 rabbitmqctl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31207")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": DIAGNOSTICS\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:14 sf206152 rabbitmqctl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31207")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:14 sf206152 rabbitmqctl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31207")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": attempted to contact: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rabbit@sf206152"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:14 sf206152 rabbitmqctl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31207")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": rabbit@sf206152:\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:14 sf206152 rabbitmqctl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31207")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": * connected to epmd "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4369")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" on sf206152\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:14 sf206152 rabbitmqctl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31207")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": * epmd reports: node "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rabbit'")]),t._v(" not running at all\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:14 sf206152 rabbitmqctl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31207")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": no other nodes on sf206152\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:14 sf206152 rabbitmqctl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31207")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": * suggestion: start the node\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:14 sf206152 rabbitmqctl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31207")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": current node details:\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:14 sf206152 rabbitmqctl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31207")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": - node name: rabbitmqctl31207@sf206152\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:14 sf206152 rabbitmqctl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31207")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": - home dir: /var/lib/rabbitmq\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:14 sf206152 rabbitmqctl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31207")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": - cookie hash: cmvEv4p7/gNkQVUvRdn10w"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:14 sf206152 systemd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": rabbitmq-server.service: control process exited, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("code")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("exited "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("status")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nJun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":11:14 sf206152 systemd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": Failed to start RabbitMQ broker.\n-- Subject: Unit rabbitmq-server.service has failed\n-- Defined-By: systemd\n-- Support: http://lists.freedesktop.org/mailman/listinfo/systemd-devel\n--\n-- Unit rabbitmq-server.service has failed.\n--\n-- The result is failed.\n")])])]),a("p",[a("strong",[t._v("解决方案：")])]),t._v(" "),a("p",[t._v("/var/lib/rabbitmq/mnesia 目录下存在rabbit@ubuntu.pid、rabbit@ubuntu、rabbit@ubuntu-plugins-expand，删除这3项后，再使用systemctl start rabbitmq-server启动，不过这样这样的话原来的账号密码就会被初始化掉，所以这边需要重新设置账号密码以及权限")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);