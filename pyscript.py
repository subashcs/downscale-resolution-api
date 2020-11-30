import sys
from PIL import Image
import math


def resizeandSaveImage(imagepath, imagename, scale):
    image = Image.open(imagepath + imagename)
    width, height = image.size
    newSize = (math.floor(width*scale), math.floor(height*scale))
    resizedImage = image.resize(newSize)
    newimagename = "sample-"+str(int(1/scale))+"-"+imagename
    resizedImage.save(imagepath + newimagename)


print('Image name:'+sys.argv[1]+'#')
print('Image path:'+sys.argv[2]+'#')

imagename = sys.argv[1]
imagepath = sys.argv[2]
scale = 1/10
resizeandSaveImage(imagepath, imagename, 1/10)
resizeandSaveImage(imagepath, imagename, 1/20)
