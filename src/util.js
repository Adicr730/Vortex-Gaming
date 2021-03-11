//Media Resize

export const smallImg = (imagePath,size) => {
	const image = imagePath.match(/media\/screenstots/)
	? imagePath.replace("media/screenstots", `media/resize/${size}/-/screenstots`)
	: imagePath.replace("media/games/", `media/resize/${size}/-/games/`);
	return image;
}