const fetchStrapi = async (path, { method = "GET", body, ...options } = {}) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${path}`;

  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    "Content-Type": "application/json", // Specify content type if sending JSON data
    ...options.headers,
  };

  const requestOptions = {
    method,
    headers,
    body: body ? JSON.stringify(body) : null, // Stringify the body object if present
    cache: "no-store",
    ...options,
  };

  try {
    const response = await fetch(url, requestOptions);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getLatestCaseStudies = async () => {
  const response = await fetchStrapi(
    `case-studies?populate=*&sort=publishedAt:desc&pagination[start]=0&pagination[limit]=3`
  );
  const data = await response.json();
  return data;
};

export const getCaseStudies = async () => {
  const response = await fetchStrapi(
    `case-studies?populate=*&sort=publishedAt:desc`
  );
  const data = await response.json();
  return data;
};

export const getCaseStudyDetail = async (slug) => {
  const response = await fetchStrapi(`case-studies/${slug}`);
  const data = await response.json();
  return data.data;
};

export const getExpertises = async () => {
  const response = await fetchStrapi(`expertises?populate=*&sort=rank:ASC`);
  const data = await response.json();
  return data;
};

export const getExpertiseCategories = async () => {
  const response = await fetchStrapi(`expertise-categories?sort=rank:ASC`);
  const data = await response.json();
  return data;
};

export const getExpertiseDetail = async (slug) => {
  const response = await fetchStrapi(
    `expertises/${slug}?sort=case_studies.id:DESC`
  );
  const data = await response.json();
  return data.data;
};

export const getInsights = async () => {
  const response = await fetchStrapi(
    `insights?populate=*&sort=publishedAt:desc`
  );
  const data = await response.json();
  return data;
};

export const getLatestInsights = async () => {
  const response = await fetchStrapi(
    `insights?populate=*&sort=publishedAt:desc&pagination[start]=0&pagination[limit]=4`
  );
  const data = await response.json();
  return data;
};

export const getLatestWhitepapers = async () => {
  const response = await fetchStrapi(
    `whitepapers?populate=*&sort=createdAt:desc&pagination[start]=0&pagination[limit]=1`
  );
  const data = await response.json();
  return data.data[0];
};

export const getInsightDetail = async (slug) => {
  const response = await fetchStrapi(`insights/${slug}`);
  const data = await response.json();
  return data.data;
};

export const getOffices = async () => {
  const response = await fetchStrapi(`offices?sort=rank:ASC`);
  const data = await response.json();
  return data;
};

export const getIndustries = async () => {
  const response = await fetchStrapi(`industries?sort=rank:ASC`);
  const data = await response.json();
  return data;
};

export const getIndustryDetail = async (slug) => {
  const response = await fetchStrapi(`industries/${slug}`);
  const data = await response.json();
  return data.data;
};

export const getFeaturedReads = async () => {
  const response = await fetchStrapi(
    `featured-read?populate[insights][populate][0]=thumbnail,industry,author&populate[case_studies][populate][0]=thumbnail,expertise,author`
  );
  const data = await response.json();
  return data;
};

export const postInquiry = async (payload) => {
  const response = await fetchStrapi(`inquiries`, {
    method: "POST",
    body: payload,
  });
  return response;
};

export const postWhitepaperUser = async (payload) => {
  const response = await fetchStrapi(`whitepaper-users`, {
    method: "POST",
    body: payload,
  });
  return response;
};

export const postApplyJob = async (payload) => {
  const response = await fetchStrapi(`job-applicants`, {
    method: "POST",
    body: payload,
  });
  return response;
};

export const getJobPositions = async () => {
  const response = await fetchStrapi(`open-job-positions`);
  const data = await response.json();
  return data.data;
};

export const getWhitepapers = async () => {
  const response = await fetchStrapi(`whitepapers?populate=*`);
  const data = await response.json();
  return data;
};

export const getWhitepaperDetail = async (slug) => {
  const response = await fetchStrapi(`whitepapers/${slug}`);
  const data = await response.json();
  return data.data;
};

export const getTeams = async () => {
  const response = await fetchStrapi(`teams?populate=*`);
  const data = await response.json();
  return data.data;
};

export const getPartners = async () => {
  const response = await fetchStrapi(`partners?populate=*`);
  const data = await response.json();
  return data.data;
};
