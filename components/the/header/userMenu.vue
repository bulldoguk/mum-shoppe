<template>
  <div
    class="absolute right-0.5 top-12 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="menu-button"
    tabindex="-1"
  >
    <div class="py-3 px-4">
      <span class="block text-sm text-gray-900 dark:text-white"
        >{{$auth.user.given_name}}</span
      >
      <span
        class="block truncate text-sm font-medium text-gray-500 dark:text-gray-400"
        >{{$auth.user.email}}</span
      >
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
