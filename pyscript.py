import sys
from PIL import Image


def resizeandSaveImage(imagepath, imagename, scale):
    image = Image.open(imagepath + imagename)
    width, height = image.size
    newSize = (width//scale, height//scale)
    resizedImage = image.resize(newSize)
    newimagename = f'{imagepath}sample{1/scale}imagename'
    resizedImage.save(imagepath+newimagename)


print('Image name:'+sys.argv[1]+'#')
print('Image path:'+sys.argv[2]+'#')

imagename = sys.argv[3]
imagepath = sys.argv[4]

resizeandSaveImage(imagepath, imagename, 1/10)
resizeandSaveImage(imagepath, imagename, 1/20)
