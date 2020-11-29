import sys
from PIL import Image



print('First param:'+sys.argv[1]+'#')
print('Second param:'+sys.argv[2]+'#')
print('Image name:'+sys.argv[3]+'#')
print('Image path:'+sys.argv[4]+'#')

imagename = sys.argv[3];
imagepath = sys.argv[4];

im = Image.open(imagepath+imagename);
width,height = im.size;
resized10 = (width//10,height//10);
resized10=im.resize(resized10);

resized10.save(imagepath+"sample-10.jpg");

resized20 = (width//20,height//20);
resized20=im.resize(resized20);
resized20.save(imagepath+"sample-20.jpg")

# im.save(imagepath+"sample-10.jpg", px=(width/10,height/10))
# im.save(imagepath+"sample-50.jpg", px=(width/50,height/50))