<script setup lang="ts"></script>

<template>
	<div h="100vh" w="100wh">
		<routerView h="90vh" />
		<div h="12" mt6 flex items-end justify-center>
			<router-link to="/community" class="nav-link1" active-class="active-link">
				社区管理
			</router-link>
			<router-link to="security" class="nav-link2" active-class="active-link">
				安保监控
			</router-link>
			<router-link to="cim" class="nav-link3" active-class="active-link">
				CIM平台
			</router-link>
			<router-link to="energy" class="nav-link4" active-class="active-link">
				能源检测
			</router-link>
			<router-link to="analysis" class="nav-link5" active-class="active-link">
				节能分析
			</router-link>
		</div>
	</div>
</template>
<style scoped>
.nav-link1::before {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	border: 1px solid #485ad3;
	border-radius: 0.25rem;
	z-index: -1;
	background-color: rgba(0, 0, 0, 0.5);
	transform: skewX(35deg);
}
.nav-link1 {
	display: inline-block;
	position: relative;
	text-decoration: none;
	font-size: 1.1rem;
	color: #fff;
	width: 7rem;
	height: 2.4rem;
	line-height: 2.4rem;
	margin: 1rem;
	text-align: center;
}
.nav-link2::before {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	border: 1px solid #485ad3;
	border-radius: 0.25rem;
	z-index: -1;
	background-color: rgba(0, 0, 0, 0.5);
	transform: skewX(18deg);
}
.nav-link2 {
	display: inline-block;
	position: relative;
	text-decoration: none;
	font-size: 1.1rem;
	color: #fff;
	width: 7rem;
	height: 2.4rem;
	line-height: 2.4rem;
	margin: 1rem;
	text-align: center;
}
.nav-link3 {
	display: inline-block;
	position: relative;
	text-decoration: none;
	font-size: 1.3rem;
	color: #fff;
	width: 7rem;
	height: 3rem;
	line-height: 3rem;
	margin: 1rem;
	text-align: center;
	border: 1px solid #485ad3;
	border-radius: 0.25rem;
	background-color: rgba(0, 0, 0, 0.5);
}
.nav-link4::before {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	border: 1px solid #485ad3;
	border-radius: 0.25rem;
	z-index: -1;
	background-color: rgba(0, 0, 0, 0.5);
	transform: skewX(-18deg);
}
.nav-link4 {
	display: inline-block;
	position: relative;
	text-decoration: none;
	font-size: 1.1rem;
	color: #fff;
	width: 7rem;
	height: 2.4rem;
	line-height: 2.4rem;
	margin: 1rem;
	text-align: center;
}
.nav-link5::before {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	border: 1px solid #485ad3;
	border-radius: 0.25rem;
	z-index: -1;
	background-color: rgba(0, 0, 0, 0.5);
	transform: skewX(-35deg);
}
.nav-link5 {
	display: inline-block;
	position: relative;
	text-decoration: none;
	font-size: 1.1rem;
	color: #fff;
	width: 7rem;
	height: 2.4rem;
	line-height: 2.4rem;
	margin: 1rem;
	text-align: center;
}
.active-link {
	color: #38cec1;
}
</style>
