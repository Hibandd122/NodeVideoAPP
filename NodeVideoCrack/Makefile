TARGET := iphone:clang:latest:14.0
ARCHS = arm64
INSTALL_TARGET_PROCESSES = NodeVideo

include $(THEOS)/makefiles/common.mk

TWEAK_NAME = NodeVideoCrack

NodeVideoCrack_FILES = Tweak.x
NodeVideoCrack_CFLAGS = -fobjc-arc

include $(THEOS_MAKE_PATH)/tweak.mk
