<template>
  <div class="dark:bg-gray-800">
    <FilterAndSearch />
    <!-- component -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
      <article class="">
        <section
          class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-20"
        >
          <div
            class="cursor-pointer"
            v-for="newsItem in news"
            :key="newsItem.id"
          >
            <router-link
              :to="'/single-post/' + newsItem.id"
              custom
              v-slot="{ navigate }"
            >
              <article
                @click="navigate"
                class="relative w-full h-64 bg-cover bg-center group overflow-hidden transition duration-300 ease-in-out"
                :style="{ backgroundImage: `url(${newsItem.imageUrl})` }"
              >
                <div
                  class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center"
                ></div>
              </article>
              <div @click="navigate" class="mt-3 text-left">
                <span
                  class="hover:underline text-news-section-text dark:text-white text-lg"
                  >{{ newsItem.title }}</span
                >
                <p
                  class="hover:underline description font-light text-gray-500 dark:text-gray-400"
                >
                  {{ newsItem.description.slice(0, 80) }}
                </p>
                <span
                  class="bg-transparent h-6 text-xs font-medium inline-flex items-center py-0.5 dark:text-green-400"
                >
                  <span class="text-button-bg-hover text-base mr-1.5"
                    >Posted on
                  </span>
                  |
                  <span class="text-base ml-1.5">{{ newsItem.postedAt }}</span>
                </span>
              </div>
            </router-link>
          </div>
        </section>
      </article>
    </section>
    <Pagination />
    <router-view></router-view>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { ref } from "vue";
import FilterAndSearch from "@/components/FilterAndSearch.vue";
import Pagination from "@/components/Pagination.vue";
import Footer from "@/components/Footer.vue";

const news = ref([
  {
    id: 1,
    imageUrl: require("../assets/news-3.jpeg"),
    title: "GEMA HOLDS PUBLIC HEARING ON MTDP",
    description:
      "The Ga East Municipal Assembly (GEMA) has held a Public Hearing on the 2022-2025 Medium Term Development Plan (MTDP) to review the needs assessment information gathered from the electoral area-stakeholders engagements and seek their input for final drafting and adoption by the Assembly.",
    postedAt: "5 mins ago",
  },
  {
    id: 2,
    imageUrl: require("../assets/news-2.jpeg"),
    title: "BOI CLINIC TO START OPERATIONS SOON",
    description:
      "The Municipal Chief Executive (MCE), for the Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, has handed over various medical items to the Health Directorate for the operationalization of the Boi Clinic, tasking them to ensure the facility starts operations within the shortest possible time.",
    postedAt: "Feb 14 2023",
  },
  {
    id: 3,
    imageUrl: require("../assets/news-1.jpeg"),
    title: "MCE LEADS STAFF AND RESIDENTS IN SPECIAL CLEAN-UP EXERCISE",
    description:
      'The Municipal Chief Executive (MCE) for Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, Thursday morning led Assembly Staff and residents to embark on a special clean-up exercise to intensify the awareness creation on the "Operation Clean Your Frontage" (OCYF) campaign.',
    postedAt: "Jan 23 2023",
  },
  {
    id: 2,
    imageUrl: require("../assets/news-2.jpeg"),
    title: "BOI CLINIC TO START OPERATIONS SOON",
    description:
      "The Municipal Chief Executive (MCE), for the Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, has handed over various medical items to the Health Directorate for the operationalization of the Boi Clinic, tasking them to ensure the facility starts operations within the shortest possible time.",
    postedAt: "Feb 14 2023",
  },
  {
    id: 1,
    imageUrl: require("../assets/news-3.jpeg"),
    title: "GEMA HOLDS PUBLIC HEARING ON MTDP",
    description:
      "The Ga East Municipal Assembly (GEMA) has held a Public Hearing on the 2022-2025 Medium Term Development Plan (MTDP) to review the needs assessment information gathered from the electoral area-stakeholders engagements and seek their input for final drafting and adoption by the Assembly.",
    postedAt: "5 mins ago",
  },
  {
    id: 3,
    imageUrl: require("../assets/news-1.jpeg"),
    title: "MCE LEADS STAFF AND RESIDENTS IN SPECIAL CLEAN-UP EXERCISE",
    description:
      'The Municipal Chief Executive (MCE) for Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, Thursday morning led Assembly Staff and residents to embark on a special clean-up exercise to intensify the awareness creation on the "Operation Clean Your Frontage" (OCYF) campaign.',
    postedAt: "Jan 23 2023",
  },
  {
    id: 2,
    imageUrl: require("../assets/news-2.jpeg"),
    title: "BOI CLINIC TO START OPERATIONS SOON",
    description:
      "The Municipal Chief Executive (MCE), for the Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, has handed over various medical items to the Health Directorate for the operationalization of the Boi Clinic, tasking them to ensure the facility starts operations within the shortest possible time.",
    postedAt: "Feb 14 2023",
  },
  {
    id: 1,
    imageUrl: require("../assets/news-3.jpeg"),
    title: "GEMA HOLDS PUBLIC HEARING ON MTDP",
    description:
      "The Ga East Municipal Assembly (GEMA) has held a Public Hearing on the 2022-2025 Medium Term Development Plan (MTDP) to review the needs assessment information gathered from the electoral area-stakeholders engagements and seek their input for final drafting and adoption by the Assembly.",
    postedAt: "5 mins ago",
  },
  {
    id: 2,
    imageUrl: require("../assets/news-2.jpeg"),
    title: "BOI CLINIC TO START OPERATIONS SOON",
    description:
      "The Municipal Chief Executive (MCE), for the Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, has handed over various medical items to the Health Directorate for the operationalization of the Boi Clinic, tasking them to ensure the facility starts operations within the shortest possible time.",
    postedAt: "Feb 14 2023",
  },
  {
    id: 1,
    imageUrl: require("../assets/news-3.jpeg"),
    title: "GEMA HOLDS PUBLIC HEARING ON MTDP",
    description:
      "The Ga East Municipal Assembly (GEMA) has held a Public Hearing on the 2022-2025 Medium Term Development Plan (MTDP) to review the needs assessment information gathered from the electoral area-stakeholders engagements and seek their input for final drafting and adoption by the Assembly.",
    postedAt: "5 mins ago",
  },
  {
    id: 3,
    imageUrl: require("../assets/news-1.jpeg"),
    title: "MCE LEADS STAFF AND RESIDENTS IN SPECIAL CLEAN-UP EXERCISE",
    description:
      'The Municipal Chief Executive (MCE) for Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, Thursday morning led Assembly Staff and residents to embark on a special clean-up exercise to intensify the awareness creation on the "Operation Clean Your Frontage" (OCYF) campaign.',
    postedAt: "Jan 23 2023",
  },
  {
    id: 2,
    imageUrl: require("../assets/news-2.jpeg"),
    title: "BOI CLINIC TO START OPERATIONS SOON",
    description:
      "The Municipal Chief Executive (MCE), for the Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, has handed over various medical items to the Health Directorate for the operationalization of the Boi Clinic, tasking them to ensure the facility starts operations within the shortest possible time.",
    postedAt: "Feb 14 2023",
  },
  {
    id: 1,
    imageUrl: require("../assets/news-3.jpeg"),
    title: "GEMA HOLDS PUBLIC HEARING ON MTDP",
    description:
      "The Ga East Municipal Assembly (GEMA) has held a Public Hearing on the 2022-2025 Medium Term Development Plan (MTDP) to review the needs assessment information gathered from the electoral area-stakeholders engagements and seek their input for final drafting and adoption by the Assembly.",
    postedAt: "5 mins ago",
  },
  {
    id: 3,
    imageUrl: require("../assets/news-1.jpeg"),
    title: "MCE LEADS STAFF AND RESIDENTS IN SPECIAL CLEAN-UP EXERCISE",
    description:
      'The Municipal Chief Executive (MCE) for Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, Thursday morning led Assembly Staff and residents to embark on a special clean-up exercise to intensify the awareness creation on the "Operation Clean Your Frontage" (OCYF) campaign.',
    postedAt: "Jan 23 2023",
  },
  {
    id: 2,
    imageUrl: require("../assets/news-2.jpeg"),
    title: "BOI CLINIC TO START OPERATIONS SOON",
    description:
      "The Municipal Chief Executive (MCE), for the Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, has handed over various medical items to the Health Directorate for the operationalization of the Boi Clinic, tasking them to ensure the facility starts operations within the shortest possible time.",
    postedAt: "Feb 14 2023",
  },
]);
</script>
<style></style>
