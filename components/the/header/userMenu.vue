<template>
  <div
    class="usermenu"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="menu-button"
    tabindex="-1"
  >
    <div class="user">
      <span class="username">{{$auth.user.given_name}}</span>
      <span class="useremail">{{$auth.user.email}}</span>
    </div>
    <ul class="py-1" aria-labelledby="dropdown">
      <li>
        <a
          href="#"
          class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
          >Dashboard</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
          >Settings</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
          >Earnings</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex flex-row justify-left block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
          @click="$auth.logout(); $emit('closeUserMenu')"
          ><SvgOutlineLogout />Sign out</a
        >
      </li>
    </ul>
  </div>
</template>
