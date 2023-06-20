.carousel {
	width: 100%;
	height: 400px;
	position: relative;
	overflow: hidden;
}

.carousel-inner {
	width: 100%;
	height: 100%;
	display: flex;
	transition: transform 0.5s;
}

.carousel-item {
	flex: 0 0 100%;
	position: relative;
}

.carousel-item img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.carousel-caption {
	position: absolute;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	color: #fff;
	padding: 10px;
	width: 100%;
}

.carousel-control-prev,
.carousel-control-next {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: rgba(0, 0, 0, 0.5);
	color: #fff;
	text-align: center;
	line-height: 40px;
	font-size: 20px;
}

.carousel-control-prev {
	left: 10px;
}

.carousel-control-next {
	right: 10px;
}
