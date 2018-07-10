let rawData = [
  {d: "Sun Jun 17 22:00:01 UTC 2018", s: "78 Mbps"},
  {d: "Sun Jun 17 23:00:01 UTC 2018", s: "79 Mbps"},
  {d: "Mon Jun 18 00:00:13 UTC 2018", s: "93 Mbps"},
  {d: "Mon Jun 18 01:00:13 UTC 2018", s: "93 Mbps"},
  {d: "Mon Jun 18 02:00:19 UTC 2018", s: "69 Mbps"},
  {d: "Mon Jun 18 03:00:13 UTC 2018", s: "61 Mbps"},
  {d: "Mon Jun 18 04:00:17 UTC 2018", s: "73 Mbps"},
  {d: "Mon Jun 18 05:00:20 UTC 2018", s: "74 Mbps"},
  {d: "Mon Jun 18 06:00:25 UTC 2018", s: "72 Mbps"},
  {d: "Mon Jun 18 07:00:20 UTC 2018", s: "66 Mbps"},
  {d: "Mon Jun 18 08:00:30 UTC 2018", s: "73 Mbps"},
  {d: "Mon Jun 18 09:00:24 UTC 2018", s: "87 Mbps"},
  {d: "Mon Jun 18 10:00:12 UTC 2018", s: "81 Mbps"},
  {d: "Mon Jun 18 11:00:21 UTC 2018", s: "83 Mbps"},
  {d: "Mon Jun 18 12:00:13 UTC 2018", s: "91 Mbps"},
  {d: "Mon Jun 18 13:00:36 UTC 2018", s: "78 Mbps"},
  {d: "Mon Jun 18 14:00:14 UTC 2018", s: "89 Mbps"},
  {d: "Mon Jun 18 15:00:38 UTC 2018", s: "75 Mbps"},
  {d: "Mon Jun 18 16:00:13 UTC 2018", s: "94 Mbps"},
  {d: "Mon Jun 18 17:00:12 UTC 2018", s: "74 Mbps"},
  {d: "Mon Jun 18 18:00:35 UTC 2018", s: "73 Mbps"},
  {d: "Mon Jun 18 19:00:25 UTC 2018", s: "85 Mbps"},
  {d: "Mon Jun 18 20:00:14 UTC 2018", s: "83 Mbps"},
  {d: "Mon Jun 18 21:00:18 UTC 2018", s: "85 Mbps"},
  {d: "Mon Jun 18 22:00:36 UTC 2018", s: "82 Mbps"},
  {d: "Mon Jun 18 23:00:20 UTC 2018", s: "74 Mbps"},
  {d: "Tue Jun 19 00:00:22 UTC 2018", s: "82 Mbps"},
  {d: "Tue Jun 19 01:00:19 UTC 2018", s: "73 Mbps"},
  {d: "Tue Jun 19 02:00:21 UTC 2018", s: "70 Mbps"},
  {d: "Tue Jun 19 03:00:15 UTC 2018", s: "72 Mbps"},
  {d: "Tue Jun 19 04:00:14 UTC 2018", s: "69 Mbps"},
  {d: "Tue Jun 19 05:00:21 UTC 2018", s: "69 Mbps"},
  {d: "Tue Jun 19 06:00:29 UTC 2018", s: "55 Mbps"},
  {d: "Tue Jun 19 07:00:20 UTC 2018", s: "83 Mbps"},
  {d: "Tue Jun 19 08:00:20 UTC 2018", s: "86 Mbps"},
  {d: "Tue Jun 19 09:00:28 UTC 2018", s: "86 Mbps"},
  {d: "Tue Jun 19 10:00:13 UTC 2018", s: "90 Mbps"},
  {d: "Tue Jun 19 11:00:37 UTC 2018", s: "73 Mbps"},
  {d: "Tue Jun 19 12:00:24 UTC 2018", s: "82 Mbps"},
  {d: "Tue Jun 19 13:00:35 UTC 2018", s: "72 Mbps"},
  {d: "Tue Jun 19 14:00:17 UTC 2018", s: "83 Mbps"},
  {d: "Tue Jun 19 15:00:20 UTC 2018", s: "86 Mbps"},
  {d: "Tue Jun 19 16:00:41 UTC 2018", s: "78 Mbps"},
  {d: "Tue Jun 19 17:00:19 UTC 2018", s: "82 Mbps"},
  {d: "Tue Jun 19 18:00:19 UTC 2018", s: "82 Mbps"},
  {d: "Tue Jun 19 19:00:18 UTC 2018", s: "73 Mbps"},
  {d: "Tue Jun 19 20:00:13 UTC 2018", s: "84 Mbps"},
  {d: "Tue Jun 19 21:00:12 UTC 2018", s: "82 Mbps"},
  {d: "Tue Jun 19 22:00:23 UTC 2018", s: "66 Mbps"},
  {d: "Tue Jun 19 23:00:25 UTC 2018", s: "75 Mbps"},
  {d: "Wed Jun 20 00:00:19 UTC 2018", s: "91 Mbps"},
  {d: "Wed Jun 20 01:00:30 UTC 2018", s: "29 Mbps"},
  {d: "Wed Jun 20 02:00:15 UTC 2018", s: "57 Mbps"},
  {d: "Wed Jun 20 03:00:30 UTC 2018", s: "63 Mbps"},
  {d: "Wed Jun 20 04:00:27 UTC 2018", s: "79 Mbps"},
  {d: "Wed Jun 20 05:00:31 UTC 2018", s: "75 Mbps"},
  {d: "Wed Jun 20 06:00:21 UTC 2018", s: "81 Mbps"},
  {d: "Wed Jun 20 07:00:28 UTC 2018", s: "81 Mbps"},
  {d: "Wed Jun 20 08:00:26 UTC 2018", s: "85 Mbps"},
  {d: "Wed Jun 20 09:00:24 UTC 2018", s: "83 Mbps"},
  {d: "Wed Jun 20 10:00:23 UTC 2018", s: "80 Mbps"},
  {d: "Wed Jun 20 11:00:36 UTC 2018", s: "75 Mbps"},
  {d: "Wed Jun 20 12:00:19 UTC 2018", s: "88 Mbps"},
  {d: "Wed Jun 20 13:00:12 UTC 2018", s: "91 Mbps"},
  {d: "Wed Jun 20 14:00:13 UTC 2018", s: "90 Mbps"},
  {d: "Wed Jun 20 15:00:22 UTC 2018", s: "74 Mbps"},
  {d: "Wed Jun 20 16:00:19 UTC 2018", s: "78 Mbps"},
  {d: "Wed Jun 20 17:00:26 UTC 2018", s: "64 Mbps"},
  {d: "Wed Jun 20 18:00:12 UTC 2018", s: "95 Mbps"},
  {d: "Wed Jun 20 19:00:35 UTC 2018", s: "73 Mbps"},
  {d: "Wed Jun 20 20:00:14 UTC 2018", s: "78 Mbps"},
  {d: "Wed Jun 20 21:00:14 UTC 2018", s: "86 Mbps"},
  {d: "Wed Jun 20 22:00:12 UTC 2018", s: "83 Mbps"},
  {d: "Wed Jun 20 23:00:21 UTC 2018", s: "71 Mbps"},
  {d: "Thu Jun 21 00:00:13 UTC 2018", s: "85 Mbps"},
  {d: "Thu Jun 21 01:00:13 UTC 2018", s: "89 Mbps"},
  {d: "Thu Jun 21 02:00:15 UTC 2018", s: "89 Mbps"},
  {d: "Thu Jun 21 03:00:21 UTC 2018", s: "35 Mbps"},
  {d: "Thu Jun 21 04:00:19 UTC 2018", s: "76 Mbps"},
  {d: "Thu Jun 21 05:00:27 UTC 2018", s: "59 Mbps"},
  {d: "Thu Jun 21 06:00:35 UTC 2018", s: "77 Mbps"},
  {d: "Thu Jun 21 07:00:13 UTC 2018", s: "94 Mbps"},
  {d: "Thu Jun 21 08:00:19 UTC 2018", s: "90 Mbps"},
  {d: "Thu Jun 21 09:01:00 UTC 2018", s: "45 Mbps"},
  {d: "Thu Jun 21 10:00:33 UTC 2018", s: "72 Mbps"},
  {d: "Thu Jun 21 11:00:24 UTC 2018", s: "75 Mbps"},
  {d: "Thu Jun 21 12:00:38 UTC 2018", s: "76 Mbps"},
  {d: "Thu Jun 21 13:00:23 UTC 2018", s: "89 Mbps"},
  {d: "Thu Jun 21 14:00:36 UTC 2018", s: "77 Mbps"},
  {d: "Thu Jun 21 15:00:36 UTC 2018", s: "62 Mbps"},
  {d: "Thu Jun 21 16:00:19 UTC 2018", s: "84 Mbps"},
  {d: "Thu Jun 21 17:00:22 UTC 2018", s: "86 Mbps"},
  {d: "Thu Jun 21 18:00:31 UTC 2018", s: "70 Mbps"},
  {d: "Thu Jun 21 19:00:19 UTC 2018", s: "81 Mbps"},
  {d: "Thu Jun 21 20:00:15 UTC 2018", s: "31 Mbps"},
  {d: "Thu Jun 21 21:00:15 UTC 2018", s: "69 Mbps"},
  {d: "Thu Jun 21 22:00:26 UTC 2018", s: "82 Mbps"},
  {d: "Thu Jun 21 23:00:38 UTC 2018", s: "62 Mbps"},
  {d: "Fri Jun 22 00:00:13 UTC 2018", s: "89 Mbps"},
  {d: "Fri Jun 22 01:00:19 UTC 2018", s: "67 Mbps"},
  {d: "Fri Jun 22 02:00:26 UTC 2018", s: "58 Mbps"},
  {d: "Fri Jun 22 03:00:19 UTC 2018", s: "61 Mbps"},
  {d: "Fri Jun 22 04:00:28 UTC 2018", s: "61 Mbps"},
  {d: "Fri Jun 22 05:00:22 UTC 2018", s: "53 Mbps"},
  {d: "Fri Jun 22 06:00:13 UTC 2018", s: "80 Mbps"},
  {d: "Fri Jun 22 07:00:40 UTC 2018", s: "53 Mbps"},
  {d: "Fri Jun 22 08:00:14 UTC 2018", s: "93 Mbps"},
  {d: "Fri Jun 22 09:00:13 UTC 2018", s: "86 Mbps"},
  {d: "Fri Jun 22 10:00:35 UTC 2018", s: "75 Mbps"},
  {d: "Fri Jun 22 11:00:33 UTC 2018", s: "72 Mbps"},
  {d: "Fri Jun 22 12:00:33 UTC 2018", s: "72 Mbps"},
  {d: "Fri Jun 22 13:00:13 UTC 2018", s: "92 Mbps"},
  {d: "Fri Jun 22 14:00:14 UTC 2018", s: "84 Mbps"},
  {d: "Fri Jun 22 15:00:37 UTC 2018", s: "61 Mbps"},
  {d: "Fri Jun 22 16:00:36 UTC 2018", s: "76 Mbps"},
  {d: "Fri Jun 22 17:00:29 UTC 2018", s: "71 Mbps"},
  {d: "Fri Jun 22 18:00:13 UTC 2018", s: "88 Mbps"},
  {d: "Fri Jun 22 19:00:37 UTC 2018", s: "65 Mbps"},
  {d: "Fri Jun 22 20:00:12 UTC 2018", s: "87 Mbps"},
  {d: "Fri Jun 22 21:00:21 UTC 2018", s: "78 Mbps"},
  {d: "Fri Jun 22 22:00:13 UTC 2018", s: "80 Mbps"},
  {d: "Fri Jun 22 23:00:17 UTC 2018", s: "91 Mbps"},
  {d: "Sat Jun 23 00:00:20 UTC 2018", s: "71 Mbps"},
  {d: "Sat Jun 23 01:00:18 UTC 2018", s: "89 Mbps"},
  {d: "Sat Jun 23 02:00:27 UTC 2018", s: "79 Mbps"},
  {d: "Sat Jun 23 03:00:35 UTC 2018", s: "58 Mbps"},
  {d: "Sat Jun 23 04:00:18 UTC 2018", s: "55 Mbps"},
  {d: "Sat Jun 23 05:00:14 UTC 2018", s: "86 Mbps"},
  {d: "Sat Jun 23 06:00:14 UTC 2018", s: "87 Mbps"},
  {d: "Sat Jun 23 07:00:18 UTC 2018", s: "90 Mbps"},
  {d: "Sat Jun 23 08:00:24 UTC 2018", s: "82 Mbps"},
  {d: "Sat Jun 23 09:00:14 UTC 2018", s: "86 Mbps"},
  {d: "Sat Jun 23 10:00:37 UTC 2018", s: "73 Mbps"},
  {d: "Sat Jun 23 12:00:13 UTC 2018", s: "88 Mbps"},
  {d: "Sat Jun 23 13:00:36 UTC 2018", s: "87 Mbps"},
  {d: "Sat Jun 23 14:00:34 UTC 2018", s: ""},
  {d: "Sat Jun 23 15:00:34 UTC 2018", s: ""},
  {d: "Sat Jun 23 16:00:33 UTC 2018", s: ""},
  {d: "Sat Jun 23 17:00:34 UTC 2018", s: ""},
  {d: "Sat Jun 23 18:00:34 UTC 2018", s: ""},
  {d: "Sat Jun 23 19:00:34 UTC 2018", s: ""},
  {d: "Sat Jun 23 20:00:34 UTC 2018", s: ""},
  {d: "Sat Jun 23 21:00:34 UTC 2018", s: ""},
  {d: "Sat Jun 23 22:00:34 UTC 2018", s: ""},
  {d: "Sat Jun 23 23:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 00:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 01:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 02:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 03:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 04:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 05:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 06:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 07:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 08:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 09:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 10:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 11:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 12:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 13:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 14:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 15:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 16:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 17:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 18:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 19:00:34 UTC 2018", s: ""},
  {d: "Sun Jun 24 20:00:34 UTC 2018", s: ""},
  /* Missing data: Chromium filling up /tmp */
  {d: "Sun Jun 24 21:00:21 UTC 2018", s: "76 Mbps"},
  {d: "Sun Jun 24 22:00:19 UTC 2018", s: "87 Mbps"},
  {d: "Sun Jun 24 23:00:21 UTC 2018", s: "71 Mbps"},
  {d: "Mon Jun 25 00:00:21 UTC 2018", s: "78 Mbps"},
  {d: "Mon Jun 25 01:00:19 UTC 2018", s: "90 Mbps"},
  {d: "Mon Jun 25 02:00:19 UTC 2018", s: "76 Mbps"},
  {d: "Mon Jun 25 03:00:19 UTC 2018", s: "72 Mbps"},
  {d: "Mon Jun 25 04:00:14 UTC 2018", s: "72 Mbps"},
  {d: "Mon Jun 25 05:00:20 UTC 2018", s: "67 Mbps"},
  {d: "Mon Jun 25 06:00:33 UTC 2018", s: "65 Mbps"},
  {d: "Mon Jun 25 07:00:18 UTC 2018", s: "67 Mbps"},
  {d: "Mon Jun 25 08:00:37 UTC 2018", s: "56 Mbps"},
  {d: "Mon Jun 25 09:00:43 UTC 2018", s: "70 Mbps"},
  {d: "Mon Jun 25 10:00:17 UTC 2018", s: "78 Mbps"},
  {d: "Mon Jun 25 11:00:18 UTC 2018", s: "85 Mbps"},
  {d: "Mon Jun 25 12:00:47 UTC 2018", s: "86 Mbps"},
  {d: "Mon Jun 25 13:00:24 UTC 2018", s: "84 Mbps"},
  {d: "Mon Jun 25 14:00:13 UTC 2018", s: "95 Mbps"},
  {d: "Mon Jun 25 15:00:23 UTC 2018", s: "88 Mbps"},
  {d: "Mon Jun 25 16:00:13 UTC 2018", s: "82 Mbps"},
  {d: "Mon Jun 25 17:00:21 UTC 2018", s: "74 Mbps"},
  {d: "Mon Jun 25 18:00:16 UTC 2018", s: "84 Mbps"},
  {d: "Mon Jun 25 19:00:43 UTC 2018", s: "70 Mbps"},
  {d: "Mon Jun 25 20:00:19 UTC 2018", s: "87 Mbps"},
  {d: "Mon Jun 25 21:00:36 UTC 2018", s: "73 Mbps"},
  {d: "Mon Jun 25 22:00:24 UTC 2018", s: "87 Mbps"},
  {d: "Mon Jun 25 23:00:20 UTC 2018", s: "80 Mbps"},
  {d: "Tue Jun 26 00:00:18 UTC 2018", s: "92 Mbps"},
  {d: "Tue Jun 26 01:00:18 UTC 2018", s: "89 Mbps"},
  {d: "Tue Jun 26 02:00:19 UTC 2018", s: "89 Mbps"},
  {d: "Tue Jun 26 03:00:18 UTC 2018", s: "72 Mbps"},
  {d: "Tue Jun 26 04:00:13 UTC 2018", s: "40 Mbps"},
  {d: "Tue Jun 26 05:00:36 UTC 2018", s: "58 Mbps"},
  {d: "Tue Jun 26 06:00:19 UTC 2018", s: "85 Mbps"},
  {d: "Tue Jun 26 07:00:21 UTC 2018", s: "87 Mbps"},
  {d: "Tue Jun 26 08:00:37 UTC 2018", s: "70 Mbps"},
  {d: "Tue Jun 26 09:00:22 UTC 2018", s: "87 Mbps"},
  {d: "Tue Jun 26 10:00:18 UTC 2018", s: "92 Mbps"},
  {d: "Tue Jun 26 11:00:43 UTC 2018", s: "69 Mbps"},
  {d: "Tue Jun 26 12:00:42 UTC 2018", s: "63 Mbps"},
  {d: "Tue Jun 26 13:00:18 UTC 2018", s: "91 Mbps"},
  {d: "Tue Jun 26 14:00:37 UTC 2018", s: "62 Mbps"},
  {d: "Tue Jun 26 15:00:20 UTC 2018", s: "95 Mbps"},
  {d: "Tue Jun 26 16:00:14 UTC 2018", s: "80 Mbps"},
  {d: "Tue Jun 26 17:00:19 UTC 2018", s: "90 Mbps"},
  {d: "Tue Jun 26 18:00:17 UTC 2018", s: "92 Mbps"},
  {d: "Tue Jun 26 19:00:15 UTC 2018", s: "88 Mbps"},
  {d: "Tue Jun 26 20:00:36 UTC 2018", s: "75 Mbps"},
  {d: "Tue Jun 26 21:00:21 UTC 2018", s: "86 Mbps"},
  {d: "Tue Jun 26 22:00:28 UTC 2018", s: "78 Mbps"},
  {d: "Tue Jun 26 23:00:16 UTC 2018", s: "73 Mbps"},
  {d: "Wed Jun 27 00:00:36 UTC 2018", s: "72 Mbps"},
  {d: "Wed Jun 27 01:00:19 UTC 2018", s: "85 Mbps"},
  {d: "Wed Jun 27 02:00:42 UTC 2018", s: "60 Mbps"},
  {d: "Wed Jun 27 03:00:43 UTC 2018", s: "71 Mbps"},
  {d: "Wed Jun 27 04:00:29 UTC 2018", s: "50 Mbps"},
  {d: "Wed Jun 27 05:00:19 UTC 2018", s: "72 Mbps"},
  {d: "Wed Jun 27 06:00:19 UTC 2018", s: "89 Mbps"},
  {d: "Wed Jun 27 07:00:40 UTC 2018", s: "77 Mbps"},
  {d: "Wed Jun 27 08:00:14 UTC 2018", s: "89 Mbps"},
  {d: "Wed Jun 27 09:00:19 UTC 2018", s: "79 Mbps"},
  {d: "Wed Jun 27 10:00:35 UTC 2018", s: "69 Mbps"},
  {d: "Wed Jun 27 11:00:13 UTC 2018", s: "89 Mbps"},
  {d: "Wed Jun 27 12:00:17 UTC 2018", s: "72 Mbps"},
  {d: "Wed Jun 27 13:00:17 UTC 2018", s: "93 Mbps"},
  {d: "Wed Jun 27 14:00:14 UTC 2018", s: "90 Mbps"},
  {d: "Wed Jun 27 15:00:32 UTC 2018", s: "72 Mbps"},
  {d: "Wed Jun 27 16:00:18 UTC 2018", s: "78 Mbps"},
  {d: "Wed Jun 27 17:00:20 UTC 2018", s: "88 Mbps"},
  {d: "Wed Jun 27 18:00:14 UTC 2018", s: "86 Mbps"},
  {d: "Wed Jun 27 19:00:39 UTC 2018", s: "80 Mbps"},
  {d: "Wed Jun 27 20:00:23 UTC 2018", s: "89 Mbps"},
  {d: "Wed Jun 27 21:00:36 UTC 2018", s: "67 Mbps"},
  {d: "Wed Jun 27 22:00:33 UTC 2018", s: "66 Mbps"},
  {d: "Wed Jun 27 23:00:17 UTC 2018", s: "60 Mbps"},
  {d: "Thu Jun 28 00:00:21 UTC 2018", s: "83 Mbps"},
  {d: "Thu Jun 28 01:00:39 UTC 2018", s: "59 Mbps"},
  {d: "Thu Jun 28 02:00:20 UTC 2018", s: "51 Mbps"},
  {d: "Thu Jun 28 03:00:28 UTC 2018", s: "59 Mbps"},
  {d: "Thu Jun 28 04:00:21 UTC 2018", s: "61 Mbps"},
  {d: "Thu Jun 28 05:00:37 UTC 2018", s: "61 Mbps"},
  {d: "Thu Jun 28 06:00:19 UTC 2018", s: "88 Mbps"},
  {d: "Thu Jun 28 07:00:22 UTC 2018", s: "85 Mbps"},
  {d: "Thu Jun 28 08:00:36 UTC 2018", s: "61 Mbps"},
  {d: "Thu Jun 28 09:00:19 UTC 2018", s: "97 Mbps"},
  {d: "Thu Jun 28 10:00:14 UTC 2018", s: "91 Mbps"},
  {d: "Thu Jun 28 11:00:21 UTC 2018", s: "89 Mbps"},
  {d: "Thu Jun 28 12:00:38 UTC 2018", s: "67 Mbps"},
  {d: "Thu Jun 28 13:00:17 UTC 2018", s: "88 Mbps"},
  {d: "Thu Jun 28 14:00:24 UTC 2018", s: "80 Mbps"},
  {d: "Thu Jun 28 15:00:18 UTC 2018", s: "83 Mbps"},
  {d: "Thu Jun 28 16:00:21 UTC 2018", s: "82 Mbps"},
  {d: "Thu Jun 28 17:00:17 UTC 2018", s: "90 Mbps"},
  {d: "Thu Jun 28 18:00:20 UTC 2018", s: "77 Mbps"},
  {d: "Thu Jun 28 19:00:40 UTC 2018", s: "68 Mbps"},
  {d: "Thu Jun 28 20:00:19 UTC 2018", s: "86 Mbps"},
  {d: "Thu Jun 28 21:00:36 UTC 2018", s: "59 Mbps"},
  {d: "Thu Jun 28 22:00:17 UTC 2018", s: "92 Mbps"},
  {d: "Thu Jun 28 23:00:34 UTC 2018", s: "68 Mbps"},
  {d: "Fri Jun 29 00:00:35 UTC 2018", s: "62 Mbps"},
  {d: "Fri Jun 29 01:00:22 UTC 2018", s: "66 Mbps"},
  {d: "Fri Jun 29 02:00:34 UTC 2018", s: "54 Mbps"},
  {d: "Fri Jun 29 03:00:14 UTC 2018", s: "69 Mbps"},
  {d: "Fri Jun 29 04:00:17 UTC 2018", s: "85 Mbps"},
  {d: "Fri Jun 29 05:00:34 UTC 2018", s: "74 Mbps"},
  {d: "Fri Jun 29 06:00:33 UTC 2018", s: "77 Mbps"},
  {d: "Fri Jun 29 07:00:22 UTC 2018", s: "78 Mbps"},
  {d: "Fri Jun 29 08:00:22 UTC 2018", s: "69 Mbps"},
  {d: "Fri Jun 29 09:00:19 UTC 2018", s: "88 Mbps"},
  {d: "Fri Jun 29 10:00:18 UTC 2018", s: "84 Mbps"},
  {d: "Fri Jun 29 11:00:18 UTC 2018", s: "85 Mbps"},
  {d: "Fri Jun 29 12:00:19 UTC 2018", s: "88 Mbps"},
  {d: "Fri Jun 29 13:00:20 UTC 2018", s: "90 Mbps"},
  {d: "Fri Jun 29 14:00:21 UTC 2018", s: "90 Mbps"},
  {d: "Fri Jun 29 15:00:17 UTC 2018", s: "84 Mbps"},
  {d: "Fri Jun 29 16:00:18 UTC 2018", s: "54 Mbps"},
  {d: "Fri Jun 29 17:00:34 UTC 2018", s: ""},
  {d: "Fri Jun 29 18:00:34 UTC 2018", s: ""},
  {d: "Fri Jun 29 19:00:17 UTC 2018", s: "40 Mbps"},
  {d: "Fri Jun 29 20:00:30 UTC 2018", s: "72 Mbps"},
  {d: "Fri Jun 29 21:00:19 UTC 2018", s: "78 Mbps"},
  {d: "Fri Jun 29 22:00:17 UTC 2018", s: "95 Mbps"},
  {d: "Fri Jun 29 23:00:16 UTC 2018", s: "65 Mbps"},
  {d: "Sat Jun 30 00:00:19 UTC 2018", s: "74 Mbps"},
  {d: "Sat Jun 30 01:00:21 UTC 2018", s: "71 Mbps"},
  {d: "Sat Jun 30 02:00:13 UTC 2018", s: "37 Mbps"},
  {d: "Sat Jun 30 03:00:39 UTC 2018", s: "79 Mbps"},
  {d: "Sat Jun 30 04:00:14 UTC 2018", s: "49 Mbps"},
  {d: "Sat Jun 30 05:00:15 UTC 2018", s: "68 Mbps"},
  {d: "Sat Jun 30 06:00:16 UTC 2018", s: "89 Mbps"},
  {d: "Sat Jun 30 07:00:33 UTC 2018", s: "64 Mbps"},
  {d: "Sat Jun 30 08:00:37 UTC 2018", s: "64 Mbps"},
  {d: "Sat Jun 30 09:00:21 UTC 2018", s: "86 Mbps"},
  {d: "Sat Jun 30 10:00:16 UTC 2018", s: "90 Mbps"},
  {d: "Sat Jun 30 11:00:17 UTC 2018", s: "86 Mbps"},
  {d: "Sat Jun 30 12:00:21 UTC 2018", s: "87 Mbps"},
  {d: "Sat Jun 30 13:00:29 UTC 2018", s: "88 Mbps"},
  {d: "Sat Jun 30 14:00:40 UTC 2018", s: "68 Mbps"},
  {d: "Sat Jun 30 15:00:27 UTC 2018", s: "67 Mbps"},
  {d: "Sat Jun 30 16:00:17 UTC 2018", s: "87 Mbps"},
  {d: "Sat Jun 30 17:00:13 UTC 2018", s: "80 Mbps"},
  {d: "Sat Jun 30 18:00:33 UTC 2018", s: "78 Mbps"},
  {d: "Sat Jun 30 19:00:22 UTC 2018", s: "88 Mbps"},
  {d: "Sat Jun 30 20:00:18 UTC 2018", s: "70 Mbps"},
  {d: "Sat Jun 30 21:00:20 UTC 2018", s: "76 Mbps"},
  {d: "Sat Jun 30 22:00:20 UTC 2018", s: "83 Mbps"},
  {d: "Sat Jun 30 23:00:36 UTC 2018", s: "67 Mbps"},
  {d: "Sun Jul  1 00:00:32 UTC 2018", s: "65 Mbps"},
  {d: "Sun Jul  1 01:00:21 UTC 2018", s: "71 Mbps"},
  {d: "Sun Jul  1 02:00:40 UTC 2018", s: "71 Mbps"},
  {d: "Sun Jul  1 03:00:18 UTC 2018", s: "72 Mbps"},
  {d: "Sun Jul  1 04:00:22 UTC 2018", s: "57 Mbps"},
  {d: "Sun Jul  1 05:00:37 UTC 2018", s: "57 Mbps"},
  {d: "Sun Jul  1 06:00:36 UTC 2018", s: "56 Mbps"},
  {d: "Sun Jul  1 07:00:31 UTC 2018", s: "62 Mbps"},
  {d: "Sun Jul  1 08:00:22 UTC 2018", s: "89 Mbps"},
  {d: "Sun Jul  1 09:00:37 UTC 2018", s: "67 Mbps"},
  {d: "Sun Jul  1 10:00:15 UTC 2018", s: "86 Mbps"},
  {d: "Sun Jul  1 11:00:38 UTC 2018", s: "62 Mbps"},
  {d: "Sun Jul  1 12:00:36 UTC 2018", s: "56 Mbps"},
  {d: "Sun Jul  1 13:00:33 UTC 2018", s: "75 Mbps"},
  {d: "Sun Jul  1 14:00:25 UTC 2018", s: "76 Mbps"},
  {d: "Sun Jul  1 15:00:34 UTC 2018", s: "74 Mbps"},
  {d: "Sun Jul  1 16:00:17 UTC 2018", s: "91 Mbps"},
  {d: "Sun Jul  1 17:00:13 UTC 2018", s: "84 Mbps"},
  {d: "Sun Jul  1 18:00:21 UTC 2018", s: "82 Mbps"},
  {d: "Sun Jul  1 19:00:13 UTC 2018", s: "73 Mbps"},
  {d: "Sun Jul  1 20:00:14 UTC 2018", s: "67 Mbps"},
  {d: "Sun Jul  1 21:00:37 UTC 2018", s: "54 Mbps"},
  {d: "Sun Jul  1 22:00:38 UTC 2018", s: "60 Mbps"},
  {d: "Sun Jul  1 23:00:14 UTC 2018", s: "88 Mbps"},
  {d: "Mon Jul  2 00:00:22 UTC 2018", s: "92 Mbps"},
  {d: "Mon Jul  2 01:00:18 UTC 2018", s: "94 Mbps"},
  {d: "Mon Jul  2 02:00:14 UTC 2018", s: "70 Mbps"},
  {d: "Mon Jul  2 03:00:20 UTC 2018", s: "68 Mbps"},
  {d: "Mon Jul  2 04:00:13 UTC 2018", s: "73 Mbps"},
  {d: "Mon Jul  2 05:00:36 UTC 2018", s: "73 Mbps"},
  {d: "Mon Jul  2 06:00:18 UTC 2018", s: "91 Mbps"},
  {d: "Mon Jul  2 07:00:21 UTC 2018", s: "86 Mbps"},
  {d: "Mon Jul  2 08:00:17 UTC 2018", s: "90 Mbps"},
  {d: "Mon Jul  2 09:00:19 UTC 2018", s: "90 Mbps"},
  {d: "Mon Jul  2 10:00:19 UTC 2018", s: "91 Mbps"},
  {d: "Mon Jul  2 11:00:19 UTC 2018", s: "89 Mbps"},
  {d: "Mon Jul  2 12:00:13 UTC 2018", s: "91 Mbps"},
  {d: "Mon Jul  2 13:00:29 UTC 2018", s: "83 Mbps"},
  {d: "Mon Jul  2 14:00:36 UTC 2018", s: "55 Mbps"},
  {d: "Mon Jul  2 15:00:31 UTC 2018", s: "71 Mbps"},
  {d: "Mon Jul  2 16:00:18 UTC 2018", s: "79 Mbps"},
  {d: "Mon Jul  2 17:00:20 UTC 2018", s: "80 Mbps"},
  {d: "Mon Jul  2 18:00:13 UTC 2018", s: "84 Mbps"},
  {d: "Mon Jul  2 19:00:19 UTC 2018", s: "70 Mbps"},
  {d: "Mon Jul  2 20:00:19 UTC 2018", s: "86 Mbps"},
  {d: "Mon Jul  2 21:00:31 UTC 2018", s: "78 Mbps"},
  {d: "Mon Jul  2 22:00:29 UTC 2018", s: "52 Mbps"},
  {d: "Mon Jul  2 23:00:28 UTC 2018", s: "53 Mbps"},
  {d: "Tue Jul  3 00:00:13 UTC 2018", s: "78 Mbps"},
  {d: "Tue Jul  3 01:00:17 UTC 2018", s: "78 Mbps"},
  {d: "Tue Jul  3 02:00:29 UTC 2018", s: "60 Mbps"},
  {d: "Tue Jul  3 03:00:23 UTC 2018", s: "84 Mbps"},
  {d: "Tue Jul  3 04:00:28 UTC 2018", s: "66 Mbps"},
  {d: "Tue Jul  3 05:00:12 UTC 2018", s: "83 Mbps"},
  {d: "Tue Jul  3 06:00:14 UTC 2018", s: "88 Mbps"},
  {d: "Tue Jul  3 07:00:19 UTC 2018", s: "96 Mbps"},
  {d: "Tue Jul  3 08:00:13 UTC 2018", s: "78 Mbps"},
  {d: "Tue Jul  3 09:00:13 UTC 2018", s: "86 Mbps"},
  {d: "Tue Jul  3 10:00:25 UTC 2018", s: "78 Mbps"},
  {d: "Tue Jul  3 11:00:13 UTC 2018", s: "85 Mbps"},
  {d: "Tue Jul  3 12:00:21 UTC 2018", s: "87 Mbps"},
  {d: "Tue Jul  3 13:00:37 UTC 2018", s: "65 Mbps"},
  {d: "Tue Jul  3 14:00:16 UTC 2018", s: "90 Mbps"},
  {d: "Tue Jul  3 15:00:20 UTC 2018", s: "86 Mbps"},
  {d: "Tue Jul  3 16:00:32 UTC 2018", s: "67 Mbps"},
  {d: "Tue Jul  3 17:00:18 UTC 2018", s: "90 Mbps"},
  {d: "Tue Jul  3 18:00:13 UTC 2018", s: "94 Mbps"},
  {d: "Tue Jul  3 19:00:22 UTC 2018", s: "84 Mbps"},
  {d: "Tue Jul  3 20:00:43 UTC 2018", s: "65 Mbps"},
  {d: "Tue Jul  3 21:00:15 UTC 2018", s: "87 Mbps"},
  {d: "Tue Jul  3 22:00:40 UTC 2018", s: "60 Mbps"},
  {d: "Tue Jul  3 23:00:17 UTC 2018", s: "81 Mbps"},
  {d: "Wed Jul  4 00:00:17 UTC 2018", s: "81 Mbps"},
  {d: "Wed Jul  4 01:00:20 UTC 2018", s: "80 Mbps"},
  {d: "Wed Jul  4 02:00:36 UTC 2018", s: "57 Mbps"},
  {d: "Wed Jul  4 03:00:24 UTC 2018", s: "79 Mbps"},
  {d: "Wed Jul  4 04:00:30 UTC 2018", s: "67 Mbps"},
  {d: "Wed Jul  4 05:00:17 UTC 2018", s: "73 Mbps"},
  {d: "Wed Jul  4 06:00:19 UTC 2018", s: "88 Mbps"},
  {d: "Wed Jul  4 07:00:19 UTC 2018", s: "82 Mbps"},
  {d: "Wed Jul  4 08:00:13 UTC 2018", s: "88 Mbps"},
  {d: "Wed Jul  4 09:00:38 UTC 2018", s: "52 Mbps"},
  {d: "Wed Jul  4 10:00:13 UTC 2018", s: "85 Mbps"},
  {d: "Wed Jul  4 11:00:44 UTC 2018", s: "65 Mbps"},
  {d: "Wed Jul  4 12:00:21 UTC 2018", s: "86 Mbps"},
  {d: "Wed Jul  4 13:00:24 UTC 2018", s: "89 Mbps"},
  {d: "Wed Jul  4 14:00:23 UTC 2018", s: "88 Mbps"},
  {d: "Wed Jul  4 15:00:21 UTC 2018", s: "83 Mbps"},
  {d: "Wed Jul  4 16:00:24 UTC 2018", s: "88 Mbps"},
  {d: "Wed Jul  4 17:00:19 UTC 2018", s: "68 Mbps"},
  {d: "Wed Jul  4 18:00:26 UTC 2018", s: "78 Mbps"},
  {d: "Wed Jul  4 19:00:14 UTC 2018", s: "80 Mbps"},
  {d: "Wed Jul  4 20:00:17 UTC 2018", s: "33 Mbps"},
  {d: "Wed Jul  4 21:00:20 UTC 2018", s: "92 Mbps"},
  {d: "Wed Jul  4 22:00:30 UTC 2018", s: "51 Mbps"},
  {d: "Wed Jul  4 23:00:19 UTC 2018", s: "71 Mbps"},
  {d: "Thu Jul  5 00:00:13 UTC 2018", s: "65 Mbps"},
  {d: "Thu Jul  5 01:00:24 UTC 2018", s: "73 Mbps"},
  {d: "Thu Jul  5 02:00:36 UTC 2018", s: "81 Mbps"},
  {d: "Thu Jul  5 03:00:20 UTC 2018", s: "75 Mbps"},
  {d: "Thu Jul  5 04:00:24 UTC 2018", s: "88 Mbps"},
  {d: "Thu Jul  5 05:00:13 UTC 2018", s: "80 Mbps"},
  {d: "Thu Jul  5 06:00:12 UTC 2018", s: "78 Mbps"},
  {d: "Thu Jul  5 07:00:22 UTC 2018", s: "72 Mbps"},
  {d: "Thu Jul  5 08:00:38 UTC 2018", s: "55 Mbps"},
  {d: "Thu Jul  5 09:00:38 UTC 2018", s: "71 Mbps"},
  {d: "Thu Jul  5 10:00:17 UTC 2018", s: "84 Mbps"},
  {d: "Thu Jul  5 11:00:22 UTC 2018", s: "90 Mbps"},
  {d: "Thu Jul  5 12:00:13 UTC 2018", s: "91 Mbps"},
  {d: "Thu Jul  5 13:00:24 UTC 2018", s: "89 Mbps"},
  {d: "Thu Jul  5 14:00:18 UTC 2018", s: "77 Mbps"},
  {d: "Thu Jul  5 15:00:13 UTC 2018", s: "84 Mbps"},
  {d: "Thu Jul  5 16:00:21 UTC 2018", s: "78 Mbps"},
  {d: "Thu Jul  5 17:00:23 UTC 2018", s: "79 Mbps"},
  {d: "Thu Jul  5 18:00:19 UTC 2018", s: "75 Mbps"},
  {d: "Thu Jul  5 19:00:15 UTC 2018", s: "63 Mbps"},
  {d: "Thu Jul  5 20:00:23 UTC 2018", s: "88 Mbps"},
  {d: "Thu Jul  5 21:00:22 UTC 2018", s: "89 Mbps"},
  {d: "Thu Jul  5 22:00:22 UTC 2018", s: "83 Mbps"},
  {d: "Thu Jul  5 23:00:40 UTC 2018", s: "54 Mbps"},
  {d: "Fri Jul  6 00:00:27 UTC 2018", s: "42 Mbps"},
  {d: "Fri Jul  6 01:00:18 UTC 2018", s: "76 Mbps"},
  {d: "Fri Jul  6 02:00:18 UTC 2018", s: "59 Mbps"},
  {d: "Fri Jul  6 03:00:22 UTC 2018", s: "47 Mbps"},
  {d: "Fri Jul  6 04:00:14 UTC 2018", s: "38 Mbps"},
  {d: "Fri Jul  6 05:00:23 UTC 2018", s: "83 Mbps"},
  {d: "Fri Jul  6 06:00:36 UTC 2018", s: "68 Mbps"},
  {d: "Fri Jul  6 07:00:20 UTC 2018", s: "95 Mbps"},
  {d: "Fri Jul  6 08:00:21 UTC 2018", s: "94 Mbps"},
  {d: "Fri Jul  6 09:00:41 UTC 2018", s: "58 Mbps"},
  {d: "Fri Jul  6 10:00:51 UTC 2018", s: "75 Mbps"},
  {d: "Fri Jul  6 11:00:24 UTC 2018", s: "87 Mbps"},
  {d: "Fri Jul  6 12:00:23 UTC 2018", s: "85 Mbps"},
  {d: "Fri Jul  6 13:00:40 UTC 2018", s: "62 Mbps"},
  {d: "Fri Jul  6 14:00:38 UTC 2018", s: "61 Mbps"},
  {d: "Fri Jul  6 15:00:20 UTC 2018", s: "85 Mbps"},
  {d: "Fri Jul  6 16:00:19 UTC 2018", s: "73 Mbps"},
  {d: "Fri Jul  6 17:00:23 UTC 2018", s: "74 Mbps"},
  {d: "Fri Jul  6 18:00:13 UTC 2018", s: "81 Mbps"},
  {d: "Fri Jul  6 19:00:25 UTC 2018", s: "85 Mbps"},
  {d: "Fri Jul  6 20:00:37 UTC 2018", s: "60 Mbps"},
  {d: "Fri Jul  6 21:00:13 UTC 2018", s: "79 Mbps"},
  {d: "Fri Jul  6 22:00:29 UTC 2018", s: "64 Mbps"},
  {d: "Fri Jul  6 23:00:39 UTC 2018", s: "67 Mbps"},
  {d: "Sat Jul  7 00:00:43 UTC 2018", s: "69 Mbps"},
  {d: "Sat Jul  7 01:00:22 UTC 2018", s: "79 Mbps"},
  {d: "Sat Jul  7 02:00:37 UTC 2018", s: "63 Mbps"},
  {d: "Sat Jul  7 03:00:25 UTC 2018", s: "39 Mbps"},
  {d: "Sat Jul  7 04:00:20 UTC 2018", s: "66 Mbps"},
  {d: "Sat Jul  7 05:00:25 UTC 2018", s: "75 Mbps"},
  {d: "Sat Jul  7 06:00:20 UTC 2018", s: "82 Mbps"},
  {d: "Sat Jul  7 07:00:19 UTC 2018", s: "87 Mbps"},
  {d: "Sat Jul  7 08:00:19 UTC 2018", s: "75 Mbps"},
  {d: "Sat Jul  7 09:00:28 UTC 2018", s: "61 Mbps"},
  {d: "Sat Jul  7 10:00:42 UTC 2018", s: "76 Mbps"},
  {d: "Sat Jul  7 11:00:13 UTC 2018", s: "85 Mbps"},
  {d: "Sat Jul  7 12:00:20 UTC 2018", s: "78 Mbps"},
  {d: "Sat Jul  7 13:00:38 UTC 2018", s: "80 Mbps"},
  {d: "Sat Jul  7 14:00:35 UTC 2018", s: "52 Mbps"},
  {d: "Sat Jul  7 15:00:26 UTC 2018", s: "78 Mbps"},
  {d: "Sat Jul  7 16:00:15 UTC 2018", s: "82 Mbps"},
  {d: "Sat Jul  7 17:00:36 UTC 2018", s: "54 Mbps"},
  {d: "Sat Jul  7 18:00:24 UTC 2018", s: "88 Mbps"},
  {d: "Sat Jul  7 19:00:24 UTC 2018", s: "74 Mbps"},
  {d: "Sat Jul  7 20:00:22 UTC 2018", s: "78 Mbps"},
  {d: "Sat Jul  7 21:00:16 UTC 2018", s: "76 Mbps"},
  {d: "Sat Jul  7 22:00:12 UTC 2018", s: "34 Mbps"},
  {d: "Sat Jul  7 23:00:25 UTC 2018", s: "84 Mbps"},
  {d: "Sun Jul  8 00:00:20 UTC 2018", s: "78 Mbps"},
  {d: "Sun Jul  8 01:00:36 UTC 2018", s: "56 Mbps"},
  {d: "Sun Jul  8 02:00:21 UTC 2018", s: "63 Mbps"},
  {d: "Sun Jul  8 03:00:32 UTC 2018", s: "61 Mbps"},
  {d: "Sun Jul  8 04:00:12 UTC 2018", s: "55 Mbps"},
  {d: "Sun Jul  8 05:00:35 UTC 2018", s: "57 Mbps"},
  {d: "Sun Jul  8 06:00:29 UTC 2018", s: "52 Mbps"},
  {d: "Sun Jul  8 07:00:37 UTC 2018", s: "66 Mbps"},
  {d: "Sun Jul  8 08:00:36 UTC 2018", s: "60 Mbps"},
  {d: "Sun Jul  8 09:00:23 UTC 2018", s: "67 Mbps"},
  {d: "Sun Jul  8 10:00:39 UTC 2018", s: "43 Mbps"},
  {d: "Sun Jul  8 11:00:23 UTC 2018", s: "88 Mbps"},
  {d: "Sun Jul  8 12:00:21 UTC 2018", s: "88 Mbps"},
  {d: "Sun Jul  8 13:00:38 UTC 2018", s: "67 Mbps"},
  {d: "Sun Jul  8 14:00:37 UTC 2018", s: "74 Mbps"},
  {d: "Sun Jul  8 15:00:24 UTC 2018", s: "83 Mbps"},
  {d: "Sun Jul  8 16:00:14 UTC 2018", s: "85 Mbps"},
  {d: "Sun Jul  8 17:00:37 UTC 2018", s: "55 Mbps"},
  {d: "Sun Jul  8 18:00:13 UTC 2018", s: "88 Mbps"},
  {d: "Sun Jul  8 19:00:13 UTC 2018", s: "84 Mbps"},
  {d: "Sun Jul  8 20:00:18 UTC 2018", s: "59 Mbps"},
  {d: "Sun Jul  8 21:00:12 UTC 2018", s: "87 Mbps"},
  {d: "Sun Jul  8 22:00:20 UTC 2018", s: "84 Mbps"},
  {d: "Sun Jul  8 23:00:37 UTC 2018", s: "68 Mbps"},
  {d: "Mon Jul  9 00:00:34 UTC 2018", s: "64 Mbps"},
  {d: "Mon Jul  9 01:00:20 UTC 2018", s: "68 Mbps"},
  {d: "Mon Jul  9 02:00:18 UTC 2018", s: "70 Mbps"},
  {d: "Mon Jul  9 03:00:25 UTC 2018", s: "80 Mbps"},
  {d: "Mon Jul  9 04:00:13 UTC 2018", s: "65 Mbps"},
  {d: "Mon Jul  9 05:00:29 UTC 2018", s: "57 Mbps"},
  {d: "Mon Jul  9 06:00:31 UTC 2018", s: "61 Mbps"},
  {d: "Mon Jul  9 07:00:28 UTC 2018", s: "44 Mbps"},
  {d: "Mon Jul  9 08:00:13 UTC 2018", s: "87 Mbps"},
  {d: "Mon Jul  9 09:00:18 UTC 2018", s: "81 Mbps"},
  {d: "Mon Jul  9 10:00:22 UTC 2018", s: "87 Mbps"},
  {d: "Mon Jul  9 11:00:19 UTC 2018", s: "85 Mbps"},
  {d: "Mon Jul  9 12:00:38 UTC 2018", s: "72 Mbps"},
  {d: "Mon Jul  9 13:00:23 UTC 2018", s: "88 Mbps"},
  {d: "Mon Jul  9 14:00:24 UTC 2018", s: "82 Mbps"},
  {d: "Mon Jul  9 15:00:20 UTC 2018", s: "90 Mbps"},
  {d: "Mon Jul  9 16:00:17 UTC 2018", s: "57 Mbps"},
  {d: "Mon Jul  9 17:00:22 UTC 2018", s: "77 Mbps"},
  {d: "Mon Jul  9 18:00:27 UTC 2018", s: "60 Mbps"},
  {d: "Mon Jul  9 19:00:36 UTC 2018", s: "45 Mbps"},
  {d: "Mon Jul  9 20:00:35 UTC 2018", s: "66 Mbps"},
  {d: "Mon Jul  9 21:00:22 UTC 2018", s: "83 Mbps"},
  {d: "Mon Jul  9 22:00:21 UTC 2018", s: "79 Mbps"},
  {d: "Mon Jul  9 23:00:23 UTC 2018", s: "82 Mbps"},
  {d: "Tue Jul 10 00:00:18 UTC 2018", s: "65 Mbps"},
  {d: "Tue Jul 10 01:00:22 UTC 2018", s: "72 Mbps"},
  {d: "Tue Jul 10 02:00:29 UTC 2018", s: "62 Mbps"},
  {d: "Tue Jul 10 03:00:32 UTC 2018", s: "53 Mbps"},
  {d: "Tue Jul 10 04:00:15 UTC 2018", s: "83 Mbps"},
  {d: "Tue Jul 10 05:00:23 UTC 2018", s: "79 Mbps"},
  {d: "Tue Jul 10 06:00:36 UTC 2018", s: "60 Mbps"},
  {d: "Tue Jul 10 07:00:19 UTC 2018", s: "75 Mbps"},
  {d: "Tue Jul 10 08:00:36 UTC 2018", s: "52 Mbps"},
  {d: "Tue Jul 10 09:00:21 UTC 2018", s: "94 Mbps"},
  {d: "Tue Jul 10 10:00:22 UTC 2018", s: "93 Mbps"},
  {d: "Tue Jul 10 11:00:21 UTC 2018", s: "83 Mbps"},
  {d: "Tue Jul 10 12:00:24 UTC 2018", s: "88 Mbps"},
  {d: "Tue Jul 10 13:00:22 UTC 2018", s: "91 Mbps"},
  {d: "Tue Jul 10 14:00:24 UTC 2018", s: "88 Mbps"},
  {d: "Tue Jul 10 15:00:38 UTC 2018", s: "56 Mbps"},
  {d: "Tue Jul 10 16:00:23 UTC 2018", s: "92 Mbps"},
  /* SED TARGET */
];
