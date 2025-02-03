<template>
  <li class="mb-6 print:mb-1">
    <div class="lg:flex print:flex justify-between w-full">
      <h4 class="text-xl print:text-2xs mb-4 print:mb-1">
        <slot name="title" />
      </h4>

      <div class="mb-3 print:mb-1 font-bold print:text-2xs text-right">
        <slot name="right" />
      </div>
    </div>
    <div class="print:text-2xs">
      <slot name="text" />
    </div>
  </li>
</template>
