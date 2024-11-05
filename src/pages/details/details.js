import { getProductById } from "../../api/api";

const CURRENT_URL = new URL(window.location.href);
const URL_PARAMS = URLSearchParams(CURRENT_URL.search);

const PRINCIPAL_IMAGE = document.getElementById('');
const CONTAINER_IMAGES = document.getElementById('');