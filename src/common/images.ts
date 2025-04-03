type DepartmentsImages = {
  photoUrl: string;
  logoUrl: string;
};

export const departmentsImages = (departmentKey: string): DepartmentsImages => {
  const departmentsMap: { [key: string]: DepartmentsImages } = {
    COSPLAY: {
      photoUrl: "https://s3.cyberzone.dev/job-site-assets/cosplay.png",
      logoUrl: "https://s3.cyberzone.dev/job-site-assets/cosplay_logo.png",
    },
    CRAFT: {
      photoUrl: "https://s3.cyberzone.dev/job-site-assets/craft.png",
      logoUrl: "https://s3.cyberzone.dev/job-site-assets/craft_logo.png",
    },
    DESIGN: {
      photoUrl: "https://s3.cyberzone.dev/job-site-assets/design.png",
      logoUrl: "https://s3.cyberzone.dev/job-site-assets/design_logo.png",
    },
    IT: {
      photoUrl: "https://s3.cyberzone.dev/job-site-assets/it.png",
      logoUrl: "https://s3.cyberzone.dev/job-site-assets/it_logo.png",
    },
    PHOTO: {
      photoUrl: "https://s3.cyberzone.dev/job-site-assets/photo.png",
      logoUrl: "https://s3.cyberzone.dev/job-site-assets/photo_logo.png",
    },
    CYBERSPORT: {
      photoUrl: "https://s3.cyberzone.dev/job-site-assets/cybersport.png",
      logoUrl: "https://s3.cyberzone.dev/job-site-assets/cybersport_logo.png",
    },
    SMM: {
      photoUrl: "https://s3.cyberzone.dev/job-site-assets/smm.png",
      logoUrl: "https://s3.cyberzone.dev/job-site-assets/smm_logo.png",
    },
    TABLEGAMES: {
      photoUrl: "https://s3.cyberzone.dev/job-site-assets/tablegames.png",
      logoUrl: "https://s3.cyberzone.dev/job-site-assets/tablegames_logo.png",
    },
    TWITCH: {
      photoUrl: "https://s3.cyberzone.dev/job-site-assets/twitch.png",
      logoUrl: "https://s3.cyberzone.dev/job-site-assets/twitch_logo.png",
    },
    VIDEO: {
      photoUrl: "https://s3.cyberzone.dev/job-site-assets/video.png",
      logoUrl: "https://s3.cyberzone.dev/job-site-assets/video_logo.png",
    },
  };

  const result = departmentsMap[departmentKey?.toString()];

  if (result && result.photoUrl && result.logoUrl) {
    return result;
  }

  return {
    photoUrl: "https://s3.cyberzone.dev/job-site-assets/default.png",
    logoUrl: "https://s3.cyberzone.dev/job-site-assets/default_logo.png",
  };
};
