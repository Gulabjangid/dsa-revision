const questionContent = [
  {
    "number": 1,
    "title": "Move Zeroes",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an integer array `nums`, move all `0`s to the end while maintaining the **relative order of non-zero elements**.\n\n### Example 1\n\n```\nInput:  [0,1,0,3,12]\nOutput: [1,3,12,0,0]\n```\n\n### Example 2\n\n```\nInput:  [0,0,1]\nOutput: [1,0,0]\n```"
      },
      {
        "title": "Approach",
        "content": "Use a **two-pointer / write-pointer** approach.\n\n- `j` represents the position where the next non-zero element should go.\n- Scan the array using `i`.\n- Whenever `nums[i] != 0`, place it at `nums[j]`.\n- After processing all non-zero elements, fill the remaining positions with `0`.\nThis avoids unnecessary shifting."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Set `j = 0`.\n2. Traverse `i` from `0` to `n-1`.\n3. If `nums[i] != 0`:\n- Set `nums[j] = nums[i]`.\n- Increment `j`.\n4. From `j` to `n-1`, put `0`.\n5. Array is modified in-place."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    void moveZeroes(vector<int>& nums) {\n        int j = 0; // Position for the next non-zero element\n\n        // Move all non-zero elements to the front\n        for (int i = 0; i < nums.size(); i++) {\n            if (nums[i] != 0) {\n                nums[j] = nums[i];\n                j++;\n            }\n        }\n\n        // Fill remaining positions with zero\n        while (j < nums.size()) {\n            nums[j] = 0;\n            j++;\n        }\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Move non-zero ?   fill remaining positions with zero.**\nKey idea:\n\n```\nj = next position for non-zero\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [0,1,0,3,12]\n\nj = 0\n\ni=0 ?   0 ?   skip\n\ni=1 ?   1\nnums[0] = 1\nj = 1\n\ni=2 ?   0 ?   skip\n\ni=3 ?   3\nnums[1] = 3\nj = 2\n\ni=4 ?   12\nnums[2] = 12\nj = 3\n\nCurrent:\n[1,3,12,3,12]\n\nFill from j=3:\n\nnums[3] = 0\nnums[4] = 0\n\nFinal:\n[1,3,12,0,0]\n```\n\n---"
      }
    ]
  },
  {
    "number": 2,
    "title": "Remove Duplicates from Sorted Array",
    "sections": [
      {
        "title": "Problem",
        "content": "Given a **sorted** array, remove duplicates in-place so that each unique element appears only once.\n\nReturn the number of unique elements.\n\n### Example 1\n\n```\nInput:  [1,1,2]\nOutput: 2\nArray becomes: [1,2,_]\n```\n\n### Example 2\n\n```\nInput:  [0,0,1,1,1,2,2,3,3,4]\nOutput: 5\nArray becomes: [0,1,2,3,4,_,_,_,_,_]\n```"
      },
      {
        "title": "Approach",
        "content": "Use the **two-pointer technique**.\n\nBecause the array is sorted, duplicates are adjacent.\n\n- `j` stores the position of the next unique element.\n- Start `j = 1`.\n- Compare `nums[i]` with the previous unique element `nums[j-1]`.\n- If different, store it at `nums[j]`."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. If array is empty, return `0`.\n2. Set `j = 1`.\n3. Traverse `i` from `1` to `n-1`.\n4. If `nums[i] != nums[j-1]`:\n- `nums[j] = nums[i]`\n- `j++`\n5. Return `j`."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        if (nums.empty()) {\n            return 0;\n        }\n\n        int j = 1; // Position for next unique element\n\n        for (int i = 1; i < nums.size(); i++) {\n            // Found a new unique element\n            if (nums[i] != nums[j - 1]) {\n                nums[j] = nums[i];\n                j++;\n            }\n        }\n\n        return j;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Sorted array = duplicates are adjacent ?   two pointers.**\nRemember:\n\n```\ni = scanner\nj = position for unique elements\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [1,1,2,2,3]\n\nj = 1\n\ni=1:\nnums[1] == nums[0]\nduplicate ?   skip\n\ni=2:\nnums[2] != nums[0]\nnums[1] = 2\nj = 2\n\nArray:\n[1,2,2,2,3]\n\ni=3:\nnums[3] == nums[1]\nduplicate ?   skip\n\ni=4:\nnums[4] != nums[1]\nnums[2] = 3\nj = 3\n\nFinal valid portion:\n[1,2,3]\n\nReturn 3\n```\n\n---"
      }
    ]
  },
  {
    "number": 3,
    "title": "Best Time to Buy and Sell Stock",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an array where `prices[i]` is the stock price on day `i`, choose one day to buy and a later day to sell to maximize profit.\n\n### Example 1\n\n```\nInput:  [7,1,5,3,6,4]\nOutput: 5\n```\n\nBuy at `1`, sell at `6`.\n\n### Example 2\n\n```\nInput:  [7,6,4,3,1]\nOutput: 0\n```\n\nNo profitable transaction exists."
      },
      {
        "title": "Approach",
        "content": "Maintain:\n\n- `minPrice` = minimum price seen so far.\n- `maxProfit` = maximum profit found so far.\nFor every price:\n\n```\nprofit = current price - minimum price\n```\n\nUpdate the maximum profit."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Set `minPrice = INT_MAX`.\n2. Set `maxProfit = 0`.\n3. Traverse every price.\n4. Update `minPrice`.\n5. Calculate current profit.\n6. Update `maxProfit`.\n7. Return `maxProfit`."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        int minPrice = INT_MAX;\n        int maxProfit = 0;\n\n        for (int price : prices) {\n            // Keep track of the cheapest buying price\n            minPrice = min(minPrice, price);\n\n            // Profit if we sell today\n            int profit = price - minPrice;\n\n            // Keep the best profit\n            maxProfit = max(maxProfit, profit);\n        }\n\n        return maxProfit;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Keep minimum buying price + maximum profit.**\nFormula:\n\n```\nprofit = currentPrice - minPrice\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nprices = [7,1,5,3,6,4]\n\nminPrice = ?~\nmaxProfit = 0\n\n7 ?   minPrice = 7\n    profit = 0\n\n1 ?   minPrice = 1\n    profit = 0\n\n5 ?   minPrice = 1\n    profit = 4\n    maxProfit = 4\n\n3 ?   minPrice = 1\n    profit = 2\n\n6 ?   minPrice = 1\n    profit = 5\n    maxProfit = 5\n\n4 ?   profit = 3\n\nAnswer = 5\n```\n\n---"
      }
    ]
  },
  {
    "number": 4,
    "title": "Maximum Subarray ?  Kadane's Algorithm",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an integer array, find the contiguous subarray having the largest sum.\n\n### Example 1\n\n```\nInput:  [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6\n```\n\nBest subarray:\n\n```\n[4,-1,2,1]\nSum = 6\n```\n\n### Example 2\n\n```\nInput:  [5,4,-1,7,8]\nOutput: 23\n```\n\nBest subarray:\n\n```\n[5,4,-1,7,8]\n```"
      },
      {
        "title": "Approach",
        "content": "Use **Kadane's Algorithm**.\n\nAt every element, decide:\n\n```\nShould I:\n1. Extend the previous subarray?\n2. Start a new subarray here?\n```\n\nFormula:\n\n```\ncurrentSum = max(nums[i], currentSum + nums[i])\n```"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Set `currentSum = nums[0]`.\n2. Set `maxSum = nums[0]`.\n3. Traverse from index `1`.\n4. Calculate:\n```\ncurrentSum = max(nums[i], currentSum + nums[i])\n```\n5. Update `maxSum`.\n6. Return `maxSum`."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        int currentSum = nums[0];\n        int maxSum = nums[0];\n\n        for (int i = 1; i < nums.size(); i++) {\n            // Either start a new subarray or extend the previous one\n            currentSum = max(nums[i], currentSum + nums[i]);\n\n            // Store the best sum found so far\n            maxSum = max(maxSum, currentSum);\n        }\n\n        return maxSum;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Kadane = current best ending here + global best.**\nRemember:\n\n```\ncurrentSum = max(x, currentSum + x)\nmaxSum = max(maxSum, currentSum)\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [-2,1,-3,4,-1,2,1,-5,4]\n\nStart:\ncurrentSum = -2\nmaxSum = -2\n\n1:\ncurrentSum = max(1, -2+1)\n           = 1\nmaxSum = 1\n\n-3:\ncurrentSum = max(-3, 1-3)\n           = -2\nmaxSum = 1\n\n4:\ncurrentSum = max(4, -2+4)\n           = 4\nmaxSum = 4\n\n-1:\ncurrentSum = max(-1, 4-1)\n           = 3\nmaxSum = 4\n\n2:\ncurrentSum = 5\nmaxSum = 5\n\n1:\ncurrentSum = 6\nmaxSum = 6\n\n-5:\ncurrentSum = 1\n\n4:\ncurrentSum = 5\n\nAnswer = 6\n```\n\n---"
      }
    ]
  },
  {
    "number": 5,
    "title": "Maximum Product Subarray",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an integer array, find the contiguous subarray with the largest product.\n\n### Example 1\n\n```\nInput:  [2,3,-2,4]\nOutput: 6\n```\n\nBest subarray:\n\n```\n[2,3] ?   6\n```\n\n### Example 2\n\n```\nInput:  [-2,0,-1]\nOutput: 0\n```\n\nPossible products are reset by `0`; the maximum is `0`."
      },
      {
        "title": "Approach",
        "content": "For sums, Kadane only needs the current maximum.\n\nFor products, **negative numbers change the situation**:\n\n```\nnegative ?  negative = positive\n```\n\nTherefore maintain:\n\n- `currentMax`\n- `currentMin`\nWhen multiplying by a negative number, maximum and minimum effectively swap roles."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Initialize:\n```\ncurrentMax = nums[0]\ncurrentMin = nums[0]\nanswer = nums[0]\n```\n2. For each next element:\n- If negative, swap `currentMax` and `currentMin`.\n- Update `currentMax`.\n- Update `currentMin`.\n- Update answer.\n3. Return answer."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int maxProduct(vector<int>& nums) {\n        int currentMax = nums[0];\n        int currentMin = nums[0];\n        int answer = nums[0];\n\n        for (int i = 1; i < nums.size(); i++) {\n            int x = nums[i];\n\n            // Negative value reverses max/min roles\n            if (x < 0) {\n                swap(currentMax, currentMin);\n            }\n\n            // Either start a new subarray or extend the previous one\n            currentMax = max(x, currentMax * x);\n            currentMin = min(x, currentMin * x);\n\n            answer = max(answer, currentMax);\n        }\n\n        return answer;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Product → maintain BOTH maximum and minimum.**\nWhy?\n\n```\nnegative × negative = positive\n```\n\nSo today's minimum can become tomorrow's maximum."
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [2,3,-2,4]\n\nStart:\nmax = 2\nmin = 2\nanswer = 2\n\nx = 3\n\nmax = max(3, 2? 3) = 6\nmin = min(3, 2? 3) = 3\nanswer = 6\n\nx = -2\n\nSwap:\nmax = 3\nmin = 6\n\nmax = max(-2, 3? -2)\n    = -2\n\nmin = min(-2, 6? -2)\n    = -12\n\nanswer = 6\n\nx = 4\n\nmax = max(4, -2? 4)\n    = 4\n\nmin = min(4, -12? 4)\n    = -48\n\nanswer = 6\n\nAnswer = 6\n```\n\n---"
      }
    ]
  },
  {
    "number": 6,
    "title": "Majority Element",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an array, find the element that appears **more than `n/2` times**.\n\nThe majority element is guaranteed to exist.\n\n### Example 1\n\n```\nInput:  [3,2,3]\nOutput: 3\n```\n\n### Example 2\n\n```\nInput:  [2,2,1,1,1,2,2]\nOutput: 2\n```"
      },
      {
        "title": "Approach",
        "content": "Use **Boyer-Moore Voting Algorithm**.\n\nMaintain:\n\n- `candidate`\n- `count`\nRules:\n\n```\ncount == 0 ?   choose current element as candidate\nsame as candidate ?   count++\ndifferent ?   count--\n```\n\nBecause the majority element occurs more than half the time, it survives the cancellation."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Set `candidate = 0`, `count = 0`.\n2. Traverse array.\n3. If `count == 0`, make current element the candidate.\n4. If current element equals candidate ?   increment count.\n5. Otherwise ?   decrement count.\n6. Return candidate."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        int candidate = 0;\n        int count = 0;\n\n        for (int num : nums) {\n            // If count becomes zero, choose a new candidate\n            if (count == 0) {\n                candidate = num;\n            }\n\n            // Vote for or against the candidate\n            if (num == candidate) {\n                count++;\n            } else {\n                count--;\n            }\n        }\n\n        return candidate;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Same candidate ?   +1, different ?   -1, count 0 ?   new candidate.**\nThis is one of the most important array voting patterns."
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [2,2,1,1,1,2,2]\n\ncandidate = -\ncount = 0\n\n2:\ncount=0 ?   candidate=2\nsame ?   count=1\n\n2:\nsame ?   count=2\n\n1:\ndifferent ?   count=1\n\n1:\ndifferent ?   count=0\n\n1:\ncount=0 ?   candidate=1\nsame ?   count=1\n\n2:\ndifferent ?   count=0\n\n2:\ncount=0 ?   candidate=2\nsame ?   count=1\n\nAnswer = 2\n```\n\n---"
      }
    ]
  },
  {
    "number": 7,
    "title": "Missing Number",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an array containing `n` distinct numbers from the range `[0,n]`, find the missing number.\n\n### Example 1\n\n```\nInput:  [3,0,1]\nOutput: 2\n```\n\nNumbers should be:\n\n```\n0,1,2,3\n```\n\n`2` is missing.\n\n### Example 2\n\n```\nInput:  [0,1]\nOutput: 2\n```"
      },
      {
        "title": "Approach",
        "content": "Use **XOR**.\n\nImportant property:\n\n```\nx ^ x = 0\nx ^ 0 = x\n```\n\nXOR all numbers from `0` to `n` and all array elements.\n\nEvery existing number cancels itself.\n\nOnly the missing number remains."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Set `missing = n`.\n2. For each index `i`:\n```\nmissing ^= i\nmissing ^= nums[i]\n```\n3. Return `missing`."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int missingNumber(vector<int>& nums) {\n        int n = nums.size();\n\n        // Start with n because indices only go from 0 to n-1\n        int missing = n;\n\n        for (int i = 0; i < n; i++) {\n            // Equal numbers cancel each other using XOR\n            missing ^= i;\n            missing ^= nums[i];\n        }\n\n        return missing;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Missing Number ?   XOR everything.**\nCore property:\n\n```\na ^ a = 0\n```\n\nNo sorting and no extra array required."
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [3,0,1]\n\nn = 3\n\nmissing = 3\n\ni=0:\nmissing = 3 ^ 0 ^ 3\n        = 0\n\ni=1:\nmissing = 0 ^ 1 ^ 0\n        = 1\n\ni=2:\nmissing = 1 ^ 2 ^ 1\n        = 2\n\nAnswer = 2\n```\n\n---"
      }
    ]
  },
  {
    "number": 8,
    "title": "Single Number",
    "sections": [
      {
        "title": "Problem",
        "content": "Given a non-empty array where every element appears exactly twice except one element, find the element that appears only once.\n\n### Example 1\n\n```\nInput:  [2,2,1]\nOutput: 1\n```\n\n### Example 2\n\n```\nInput:  [4,1,2,1,2]\nOutput: 4\n```"
      },
      {
        "title": "Approach",
        "content": "Use XOR.\n\nEvery duplicate pair cancels:\n\n```\nx ^ x = 0\n```\n\nAnd:\n\n```\n0 ^ x = x\n```\n\nTherefore, after XORing the entire array, only the unique number remains."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Initialize `answer = 0`.\n2. Traverse every element.\n3. XOR it with `answer`.\n4. Return `answer`."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        int answer = 0;\n\n        for (int num : nums) {\n            // Duplicate values cancel each other\n            answer ^= num;\n        }\n\n        return answer;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Pairs cancel with XOR ?   unique number survives.**\nRemember:\n\n```\na ^ a = 0\n0 ^ a = a\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [4,1,2,1,2]\n\nanswer = 0\n\n4:\n0 ^ 4 = 4\n\n1:\n4 ^ 1 = 5\n\n2:\n5 ^ 2 = 7\n\n1:\n7 ^ 1 = 6\n\n2:\n6 ^ 2 = 4\n\nAnswer = 4\n```\n\nConceptually:\n\n```\n4 ^ 1 ^ 2 ^ 1 ^ 2\n= 4 ^ (1 ^ 1) ^ (2 ^ 2)\n= 4 ^ 0 ^ 0\n= 4\n```\n\n---"
      }
    ]
  },
  {
    "number": 9,
    "title": "Find the Duplicate Number",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an array containing `n + 1` integers where each integer is in the range `[1,n]`, exactly one number is repeated at least once.\n\nFind the duplicate number.\n\nYou must not modify the array and should use **constant extra space**.\n\n### Example 1\n\n```\nInput:  [1,3,4,2,2]\nOutput: 2\n```\n\n### Example 2\n\n```\nInput:  [3,1,3,4,2]\nOutput: 3\n```"
      },
      {
        "title": "Approach",
        "content": "Use **Floyd's Cycle Detection Algorithm**.\n\nTreat the array as a linked list:\n\n```\nnext = nums[current]\n```\n\nBecause one number is duplicated, two indices eventually point into the same path, creating a **cycle**.\n\nUse two pointers:\n\n- `slow` moves one step.\n- `fast` moves two steps.\nOnce they meet, reset one pointer and move both one step at a time. Their next meeting point is the duplicate."
      },
      {
        "title": "Algorithm / Steps",
        "content": "### Phase 1 ?  Find intersection\n\n1. `slow = nums[0]`\n2. `fast = nums[0]`\n3. Move:\n```\nslow = nums[slow]\nfast = nums[nums[fast]]\n```\n4. Stop when `slow == fast`.\n\n### Phase 2 ?  Find cycle entrance\n\n1. Set `slow = nums[0]`.\n2. Move both one step:\n```\nslow = nums[slow]\nfast = nums[fast]\n```\n3. When they meet, return `slow`.\nThat meeting point is the duplicate number."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int findDuplicate(vector<int>& nums) {\n        // Phase 1: Find intersection point inside the cycle\n        int slow = nums[0];\n        int fast = nums[0];\n\n        do {\n            slow = nums[slow];           // Move one step\n            fast = nums[nums[fast]];     // Move two steps\n        } while (slow != fast);\n\n        // Phase 2: Find the entrance of the cycle\n        slow = nums[0];\n\n        while (slow != fast) {\n            slow = nums[slow];\n            fast = nums[fast];\n        }\n\n        // Cycle entrance represents the duplicate number\n        return slow;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Duplicate Number → Convert array into linked-list cycle → Floyd's algorithm.**\nRemember:\n\n```\nslow = 1 step\nfast = 2 steps\n\nMeeting → reset slow\n\nBoth move 1 step\n\nMeeting again = duplicate\n```\n\n### Why does a cycle exist?\nFor:\n\n```\n[1,3,4,2,2]\n```\n\nTreat each value as the next index:\n\n```\n0 → 1 → 3 → 2 → 4\n        ↑       ↓\n        └───────┘\n```\n\nThe duplicate `2` causes multiple paths to point into the same cycle."
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [1,3,4,2,2]\n\nIndex:\n 0  1  2  3  4\n[1, 3, 4, 2, 2]\n```\n\n### Phase 1\nStart:\n\n```\nslow = nums[0] = 1\nfast = nums[0] = 1\n```\n\nFirst movement:\n\n```\nslow = nums[1] = 3\n\nfast = nums[nums[1]]\n     = nums[3]\n     = 2\n```\n\nSo:\n\n```\nslow = 3\nfast = 2\n```\n\nSecond movement:\n\n```\nslow = nums[3] = 2\n\nfast = nums[nums[2]]\n     = nums[4]\n     = 2\n```\n\nNow:\n\n```\nslow = 2\nfast = 2\n```\n\nThey meet.\n\n### Phase 2\nReset:\n\n```\nslow = nums[0] = 1\nfast = 2\n```\n\nMove both one step:\n\n```\nslow = nums[1] = 3\nfast = nums[2] = 4\n```\n\nAgain:\n\n```\nslow = nums[3] = 2\nfast = nums[4] = 2\n```\n\nThey meet at:\n\n```\n2\n```\n\n### Answer\n\n```\nDuplicate = 2\n```\n\n---\n\n# Final Revision Map\n#ProblemCore PatternKey IdeaTimeSpace1Move ZeroesTwo PointerMove non-zero + fill zero`O(n)``O(1)`2Remove DuplicatesTwo PointerKeep unique values`O(n)``O(1)`3Best Time to Buy/SellState TrackingMinimum price + profit`O(n)``O(1)`4Maximum SubarrayKadaneExtend or restart`O(n)``O(1)`5Maximum Product SubarrayState TrackingTrack max + min`O(n)``O(1)`6Majority ElementVotingBoyer-Moore`O(n)``O(1)`7Missing NumberXORCancel equal values`O(n)``O(1)`8Single NumberXORPairs cancel`O(n)``O(1)`9Find Duplicate NumberCycle DetectionFloyd's algorithm`O(n)``O(1)`\n\n## Must-Remember Interview Triggers\n\n```\nMove Zeroes\n?   Two Pointer / Write Pointer\n\nRemove Duplicates\n?   Sorted + Two Pointer\n\nStock\n?   Minimum so far + Maximum profit\n\nMaximum Subarray\n?   Kadane\n\nMaximum Product\n?   Current Maximum + Current Minimum\n\nMajority Element\n?   Boyer-Moore Voting\n\nMissing Number\n?   XOR\n\nSingle Number\n?   XOR\n\nFind Duplicate Number\n?   Floyd Cycle Detection\n```\n\nThis is the correct **Arrays ?   Linear Scan & State Tracking** revision set."
      }
    ]
  },
  {
    "number": 10,
    "title": "Range Sum Query ?  Immutable",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an integer array `nums`, answer multiple queries of the form:\n\n```\nsumRange(left, right)\n```\n\nReturn the sum of elements from index `left` to `right`, inclusive.\n\n### Example 1\n\n```\nInput:\nnums = [-2, 0, 3, -5, 2, -1]\n\nsumRange(0, 2) = 1\n```\n\nBecause:\n\n```\n-2 + 0 + 3 = 1\n```\n\n### Example 2\n\n```\nsumRange(2, 5) = -1\n```\n\nBecause:\n\n```\n3 + (-5) + 2 + (-1) = -1\n```"
      },
      {
        "title": "Approach",
        "content": "Build a **prefix sum array**.\n\nDefine:\n\n```\nprefix[i] = sum of first i elements\n```\n\nUse an extra element:\n\n```\nprefix[0] = 0\n```\n\nThen:\n\n```\nprefix[i + 1] = prefix[i] + nums[i]\n```\n\nRange sum:\n\n```\nsum(left, right)\n= prefix[right + 1] - prefix[left]\n```"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Create `prefix` of size `n + 1`.\n2. Set `prefix[0] = 0`.\n3. Build prefix sums.\n4. For every query:\n```\nprefix[right + 1] - prefix[left]\n```\n5. Return the result."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass NumArray {\nprivate:\n    vector<int> prefix;\n\npublic:\n    NumArray(vector<int>& nums) {\n        int n = nums.size();\n\n        // prefix[i] stores the sum of elements nums[0...i-1]\n        prefix.resize(n + 1, 0);\n\n        for (int i = 0; i < n; i++) {\n            prefix[i + 1] = prefix[i] + nums[i];\n        }\n    }\n\n    int sumRange(int left, int right) {\n        // Remove the sum before 'left'\n        return prefix[right + 1] - prefix[left];\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Preprocessing Time:** `O(n)`\n- **Query Time:** `O(1)`\n- **Space:** `O(n)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Prefix Sum = precompute cumulative sums so every range query becomes O(1).**\nFormula:\n\n```\nsum(left, right)\n= prefix[right + 1] - prefix[left]\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [-2,0,3,-5,2,-1]\n\nprefix:\n\nindex:   0   1   2   3   4   5   6\nprefix:  0  -2  -2   1  -4  -2  -3\n```\n\nQuery:\n\n```\nleft = 2\nright = 5\n```\n\n```\nprefix[6] - prefix[2]\n= -3 - (-2)\n= -1\n```\n\nAnswer:\n\n```\n-1\n```\n\n---"
      }
    ]
  },
  {
    "number": 11,
    "title": "Subarray Sum Equals K",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an integer array `nums` and integer `k`, find the total number of **continuous subarrays** whose sum equals `k`.\n\n### Example 1\n\n```\nInput:\nnums = [1,1,1]\nk = 2\n\nOutput:\n2\n```\n\nSubarrays:\n\n```\n[1,1]\n[1,1]\n```\n\n### Example 2\n\n```\nInput:\nnums = [1,2,3]\nk = 3\n\nOutput:\n2\n```\n\nSubarrays:\n\n```\n[1,2]\n[3]\n```"
      },
      {
        "title": "Approach",
        "content": "Use:\n\n**Prefix Sum + Hash Map**\n\nSuppose current prefix sum is:\n\n```\ncurrentSum\n```\n\nWe need an earlier prefix sum:\n\n```\ncurrentSum - k\n```\n\nbecause:\n\n```\ncurrentSum - previousSum = k\n```\n\nStore the frequency of every prefix sum in a hash map.\n\nInitialize:\n\n```\nfreq[0] = 1\n```\n\nThis handles subarrays starting from index `0`."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Set `currentSum = 0`.\n2. Set `count = 0`.\n3. Set:\n```\nfreq[0] = 1\n```\n4. Traverse every number.\n5. Add number to `currentSum`.\n6. Check whether:\n```\ncurrentSum - k\n```\n\nexists.\n7. Add its frequency to `count`.\n8. Store current prefix sum in the map.\n9. Return `count`."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int subarraySum(vector<int>& nums, int k) {\n        unordered_map<int, int> freq;\n\n        // Empty prefix has sum 0\n        freq[0] = 1;\n\n        int currentSum = 0;\n        int count = 0;\n\n        for (int num : nums) {\n            currentSum += num;\n\n            // Need an earlier prefix sum = currentSum - k\n            int required = currentSum - k;\n\n            if (freq.count(required)) {\n                count += freq[required];\n            }\n\n            // Store frequency of current prefix sum\n            freq[currentSum]++;\n        }\n\n        return count;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)` average\n- **Space:** `O(n)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Subarray Sum K ?   Prefix Sum + HashMap.**\nMain equation:\n\n```\ncurrentSum - oldSum = k\n\noldSum = currentSum - k\n```\n\n**Do not use sliding window** when negative numbers can exist."
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [1,1,1]\nk = 2\n\nfreq = {0:1}\nsum = 0\ncount = 0\n```\n\n### num = 1\n\n```\nsum = 1\nrequired = 1 - 2 = -1\n\n-1 not found\n\nfreq[1]++\n```\n\n### num = 1\n\n```\nsum = 2\nrequired = 2 - 2 = 0\n\nfreq[0] = 1\ncount = 1\n```\n\n### num = 1\n\n```\nsum = 3\nrequired = 3 - 2 = 1\n\nfreq[1] = 1\ncount = 2\n```\n\nAnswer:\n\n```\n2\n```\n\n---"
      }
    ]
  },
  {
    "number": 12,
    "title": "Continuous Subarray Sum",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an integer array `nums` and integer `k`, determine whether the array contains a continuous subarray of at least two elements whose sum is a multiple of `k`.\n\n### Example 1\n\n```\nInput:\nnums = [23,2,4,6,7]\nk = 6\n\nOutput: true\n```\n\nBecause:\n\n```\n[2,4] ?   6\n```\n\n### Example 2\n\n```\nInput:\nnums = [23,2,6,4,7]\nk = 6\n\nOutput: true\n```\n\nBecause:\n\n```\n[23,2,6,4,7] ?   42\n```\n\nwhich is divisible by `6`."
      },
      {
        "title": "Approach",
        "content": "Use **Prefix Sum + Remainder HashMap**.\n\nIf:\n\n```\nprefixSum % k\n```\n\nis the same at two different positions, then the sum between those positions is divisible by `k`.\n\nWhy?\n\n```\n(prefix[j] - prefix[i]) % k = 0\n```\n\nif:\n\n```\nprefix[j] % k == prefix[i] % k\n```\n\nStore the **first index** where each remainder appears.\n\nWhy first?\n\nBecause it gives the longest possible subarray."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Create map:\n```\nremainder ?   first index\n```\n2. Store:\n```\nremainder 0 ?   index -1\n```\n3. Maintain prefix sum.\n4. Calculate remainder:\n```\nsum % k\n```\n5. If remainder already exists:\n- Check subarray length.\n- If length ?0? 2, return `true`.\n6. Otherwise store its first index.\n7. Return `false`."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    bool checkSubarraySum(vector<int>& nums, int k) {\n        // remainder -> first index where it appeared\n        unordered_map<int, int> firstIndex;\n\n        // Remainder 0 exists before the array starts\n        firstIndex[0] = -1;\n\n        long long prefixSum = 0;\n\n        for (int i = 0; i < nums.size(); i++) {\n            prefixSum += nums[i];\n\n            int remainder = prefixSum % k;\n\n            // Handle negative remainder safely\n            if (remainder < 0) {\n                remainder += k;\n            }\n\n            if (firstIndex.count(remainder)) {\n                // Same remainder means the subarray sum is divisible by k\n                if (i - firstIndex[remainder] >= 2) {\n                    return true;\n                }\n            } else {\n                // Store only the first occurrence\n                firstIndex[remainder] = i;\n            }\n        }\n\n        return false;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)` average\n- **Space:** `O(min(n, k))`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Continuous Subarray Sum ?   Prefix Sum % k + HashMap.**\nKey rule:\n\n```\nSame remainder\n+\ndistance >= 2\n?   valid subarray\n```\n\nImportant:\n\n```\nfirstIndex[0] = -1\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [23,2,4,6,7]\nk = 6\n```\n\nInitial:\n\n```\nfirstIndex = {0:-1}\n```\n\n### i = 0\n\n```\nsum = 23\n23 % 6 = 5\n\nstore:\n5 ?   0\n```\n\n### i = 1\n\n```\nsum = 25\n25 % 6 = 1\n\nstore:\n1 ?   1\n```\n\n### i = 2\n\n```\nsum = 29\n29 % 6 = 5\n```\n\nRemainder `5` already appeared at index `0`.\n\nLength:\n\n```\n2 - 0 = 2\n```\n\nTherefore:\n\n```\n[2,4]\n```\n\nhas sum `6`.\n\nAnswer:\n\n```\ntrue\n```\n\n---"
      }
    ]
  },
  {
    "number": 13,
    "title": "Product of Array Except Self",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an integer array `nums`, return an array where:\n\n```\nanswer[i] = product of every element except nums[i]\n```\n\nDo not use division.\n\n### Example 1\n\n```\nInput:\n[1,2,3,4]\n\nOutput:\n[24,12,8,6]\n```\n\n### Example 2\n\n```\nInput:\n[-1,1,0,-3,3]\n\nOutput:\n[0,0,9,0,0]\n```"
      },
      {
        "title": "Approach",
        "content": "Use **Prefix Product + Suffix Product**.\n\nFor each index:\n\n```\nanswer[i]\n=\nproduct of elements before i\n? \nproduct of elements after i\n```\n\nDo it in two passes using the output array itself.\n\n### First pass\nStore left/prefix products.\n\n### Second pass\nMultiply by right/suffix product."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Initialize `answer` with `1`.\n2. Traverse left to right.\n3. Store product of all elements before current index.\n4. Maintain `suffixProduct`.\n5. Traverse right to left.\n6. Multiply `answer[i]` by suffix product.\n7. Update suffix product.\n8. Return answer."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<int> productExceptSelf(vector<int>& nums) {\n        int n = nums.size();\n        vector<int> answer(n, 1);\n\n        // Store product of all elements to the LEFT of i\n        int prefixProduct = 1;\n\n        for (int i = 0; i < n; i++) {\n            answer[i] = prefixProduct;\n            prefixProduct *= nums[i];\n        }\n\n        // Multiply by product of all elements to the RIGHT of i\n        int suffixProduct = 1;\n\n        for (int i = n - 1; i >= 0; i--) {\n            answer[i] *= suffixProduct;\n            suffixProduct *= nums[i];\n        }\n\n        return answer;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)` extra space\n`answer` is not counted as extra output space."
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Product Except Self = Left Product ?  Right Product.**\nThink:\n\n```\nanswer[i]\n= LEFT ?  RIGHT\n```\n\nTwo passes:\n\n```\nL ?   R = prefix\nR ?   L = suffix\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [1,2,3,4]\n```\n\n### Left pass\n\n```\nprefixProduct = 1\n\ni=0:\nanswer[0] = 1\nprefix = 1\n\ni=1:\nanswer[1] = 1\nprefix = 2\n\ni=2:\nanswer[2] = 2\nprefix = 6\n\ni=3:\nanswer[3] = 6\nprefix = 24\n```\n\nNow:\n\n```\nanswer = [1,1,2,6]\n```\n\n### Right pass\n\n```\nsuffix = 1\n```\n\ni=3:\n\n```\nanswer[3] = 6 ?  1 = 6\nsuffix = 4\n```\n\ni=2:\n\n```\nanswer[2] = 2 ?  4 = 8\nsuffix = 12\n```\n\ni=1:\n\n```\nanswer[1] = 1 ?  12 = 12\nsuffix = 24\n```\n\ni=0:\n\n```\nanswer[0] = 1 ?  24 = 24\n```\n\nFinal:\n\n```\n[24,12,8,6]\n```\n\n---\n\n# Pattern: Hashing"
      }
    ]
  },
  {
    "number": 14,
    "title": "Two Sum",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an array `nums` and target `target`, return indices of two numbers whose sum equals the target.\n\nEach input has exactly one solution.\n\n### Example 1\n\n```\nInput:\nnums = [2,7,11,15]\ntarget = 9\n\nOutput:\n[0,1]\n```\n\nBecause:\n\n```\n2 + 7 = 9\n```\n\n### Example 2\n\n```\nInput:\nnums = [3,2,4]\ntarget = 6\n\nOutput:\n[1,2]\n```"
      },
      {
        "title": "Approach",
        "content": "Use a **HashMap**.\n\nFor each number:\n\n```\nrequired = target - nums[i]\n```\n\nCheck whether `required` was already seen.\n\nIf yes, we found the pair."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Create hash map:\n```\nvalue ?   index\n```\n2. Traverse array.\n3. Calculate:\n```\nrequired = target - nums[i]\n```\n4. If required exists, return its index and current index.\n5. Otherwise store current number.\n6. Continue."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        unordered_map<int, int> seen;\n\n        for (int i = 0; i < nums.size(); i++) {\n            int required = target - nums[i];\n\n            // Check if the required value was seen earlier\n            if (seen.count(required)) {\n                return {seen[required], i};\n            }\n\n            // Store current value and its index\n            seen[nums[i]] = i;\n        }\n\n        return {};\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)` average\n- **Space:** `O(n)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Two Sum ?   required = target - current ?   check HashMap.**\nDo not unnecessarily sort the array when the question asks for original indices."
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [2,7,11,15]\ntarget = 9\n\nseen = {}\n```\n\ni=0:\n\n```\ncurrent = 2\nrequired = 9 - 2 = 7\n\n7 not found\n\nseen = {2:0}\n```\n\ni=1:\n\n```\ncurrent = 7\nrequired = 9 - 7 = 2\n\n2 found at index 0\n```\n\nAnswer:\n\n```\n[0,1]\n```\n\n---"
      }
    ]
  },
  {
    "number": 15,
    "title": "Longest Consecutive Sequence",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an unsorted array, find the length of the longest sequence of consecutive integers.\n\n### Example 1\n\n```\nInput:\n[100,4,200,1,3,2]\n\nOutput:\n4\n```\n\nSequence:\n\n```\n1,2,3,4\n```\n\n### Example 2\n\n```\nInput:\n[0,3,7,2,5,8,4,6,0,1]\n\nOutput:\n9\n```\n\nSequence:\n\n```\n0,1,2,3,4,5,6,7,8\n```"
      },
      {
        "title": "Approach",
        "content": "Put every number into an `unordered_set`.\n\nA number is the **start of a sequence** only if:\n\n```\nnum - 1\n```\n\ndoes not exist.\n\nThen keep checking:\n\n```\nnum + 1\nnum + 2\n...\n```\n\nThis avoids repeatedly starting sequences from the middle."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Insert all numbers into a set.\n2. For every number:\n3. If `num - 1` does not exist:\n- Start a sequence.\n4. Keep checking `num + 1`.\n5. Calculate its length.\n6. Update maximum.\n7. Return maximum."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int longestConsecutive(vector<int>& nums) {\n        unordered_set<int> st(nums.begin(), nums.end());\n\n        int longest = 0;\n\n        for (int num : st) {\n            // Start only when num is the beginning of a sequence\n            if (!st.count(num - 1)) {\n                int current = num;\n                int length = 1;\n\n                // Extend the consecutive sequence\n                while (st.count(current + 1)) {\n                    current++;\n                    length++;\n                }\n\n                longest = max(longest, length);\n            }\n        }\n\n        return longest;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)` average\n- **Space:** `O(n)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Set + start only at `num-1` absent.**\nKey condition:\n\n```\nif (!set.count(num - 1))\n```\n\nThat makes `num` the sequence's starting point."
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [100,4,200,1,3,2]\n\nSet:\n{100,4,200,1,3,2}\n```\n\n### num = 1\n\n```\n0 not found\n```\n\nSo start sequence:\n\n```\n1 ?   2 ?   3 ?   4\n```\n\nLength:\n\n```\n4\n```\n\n### num = 2\n\n```\n1 exists\n```\n\nNot a starting point.\n\n### num = 3\n\n```\n2 exists\n```\n\nNot a starting point.\n\n### num = 4\n\n```\n3 exists\n```\n\nNot a starting point.\n\n### num = 100\n\n```\n99 not found\n```\n\nSequence length = `1`.\n\n### num = 200\nSequence length = `1`.\n\nFinal:\n\n```\nlongest = 4\n```\n\n---\n\n# Pattern: Sorting & Partitioning"
      }
    ]
  },
  {
    "number": 16,
    "title": "Sort Colors",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an array containing only `0`, `1`, and `2`, sort it in-place.\n\n### Example 1\n\n```\nInput:\n[2,0,2,1,1,0]\n\nOutput:\n[0,0,1,1,2,2]\n```\n\n### Example 2\n\n```\nInput:\n[2,0,1]\n\nOutput:\n[0,1,2]\n```"
      },
      {
        "title": "Approach",
        "content": "Use the **Dutch National Flag Algorithm**.\n\nMaintain three regions:\n\n```\n[0 ... low-1]     ?   0\n[low ... mid-1]   ?   1\n[mid ... high]    ?   unknown\n[high+1 ... n-1]  ?   2\n```\n\nPointers:\n\n```\nlow\nmid\nhigh\n```"
      },
      {
        "title": "Algorithm / Steps",
        "content": "### If `nums[mid] == 0`\nSwap with `low`.\n\n```\nlow++\nmid++\n```\n\n### If `nums[mid] == 1`\nAlready correct.\n\n```\nmid++\n```\n\n### If `nums[mid] == 2`\nSwap with `high`.\n\n```\nhigh--\n```\n\n**Do not increment `mid` here**, because the swapped value from `high` has not been processed yet."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    void sortColors(vector<int>& nums) {\n        int low = 0;\n        int mid = 0;\n        int high = nums.size() - 1;\n\n        while (mid <= high) {\n            if (nums[mid] == 0) {\n                // Put 0 into the left region\n                swap(nums[low], nums[mid]);\n                low++;\n                mid++;\n            }\n            else if (nums[mid] == 1) {\n                // 1 is already in the middle region\n                mid++;\n            }\n            else {\n                // Put 2 into the right region\n                swap(nums[mid], nums[high]);\n                high--;\n\n                // Do NOT increment mid.\n                // The swapped value still needs processing.\n            }\n        }\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **0 ?   left, 1 ?   stay/move, 2 ?   right.**\nRemember:\n\n```\n0 ?   low\n1 ?   mid\n2 ?   high\n```\n\n**2 case: `mid` does NOT move.**"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [2,0,2,1,1,0]\n\nlow=0, mid=0, high=5\n```\n\n`nums[mid] = 2`\n\nSwap `mid` and `high`:\n\n```\n[0,0,2,1,1,2]\n```\n\n```\nhigh = 4\nmid = 0\n```\n\n`nums[mid] = 0`\n\nSwap low/mid:\n\n```\n[0,0,2,1,1,2]\n```\n\n```\nlow=1\nmid=1\n```\n\n`nums[mid] = 0`\n\n```\nlow=2\nmid=2\n```\n\n`nums[mid] = 2`\n\nSwap with high:\n\n```\n[0,0,1,1,2,2]\n```\n\n```\nhigh=3\nmid=2\n```\n\n`nums[mid] = 1`\n\n```\nmid=3\n```\n\n`nums[mid] = 1`\n\n```\nmid=4\n```\n\nNow:\n\n```\nmid > high\n```\n\nDone.\n\n---"
      }
    ]
  },
  {
    "number": 17,
    "title": "Rotate Array",
    "sections": [
      {
        "title": "Problem",
        "content": "Rotate the array to the right by `k` positions.\n\n### Example 1\n\n```\nInput:\nnums = [1,2,3,4,5,6,7]\nk = 3\n\nOutput:\n[5,6,7,1,2,3,4]\n```\n\n### Example 2\n\n```\nInput:\nnums = [-1,-100,3,99]\nk = 2\n\nOutput:\n[3,99,-1,-100]\n```"
      },
      {
        "title": "Approach",
        "content": "Use the **three-reversal technique**.\n\nFor right rotation by `k`:\n\n1. Reverse the entire array.\n2. Reverse first `k` elements.\n3. Reverse remaining elements.\nFirst reduce:\n\n```\nk = k % n\n```\n\nbecause rotating `n` times returns the original array."
      },
      {
        "title": "Algorithm / Steps",
        "content": "For:\n\n```\n[1,2,3,4,5,6,7]\nk=3\n```\n\n### Step 1\nReverse entire array:\n\n```\n[7,6,5,4,3,2,1]\n```\n\n### Step 2\nReverse first `3`:\n\n```\n[5,6,7,4,3,2,1]\n```\n\n### Step 3\nReverse remaining:\n\n```\n[5,6,7,1,2,3,4]\n```"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    void rotate(vector<int>& nums, int k) {\n        int n = nums.size();\n\n        // Rotating by n positions gives the same array\n        k %= n;\n\n        // Reverse the complete array\n        reverse(nums.begin(), nums.end());\n\n        // Reverse the first k elements\n        reverse(nums.begin(), nums.begin() + k);\n\n        // Reverse the remaining elements\n        reverse(nums.begin() + k, nums.end());\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Right Rotate ?   Reverse All ?   Reverse First K ?   Reverse Rest.**\nAlso remember:\n\n```\nk %= n\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [1,2,3,4,5,6,7]\nk = 3\n```\n\n### Reverse all\n\n```\n[7,6,5,4,3,2,1]\n```\n\n### Reverse first 3\n\n```\n[5,6,7,4,3,2,1]\n```\n\n### Reverse remaining 4\n\n```\n[5,6,7,1,2,3,4]\n```\n\nFinal:\n\n```\n[5,6,7,1,2,3,4]\n```\n\n---"
      }
    ]
  },
  {
    "number": 18,
    "title": "Next Permutation",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an array representing a permutation, rearrange it into the **next lexicographically greater permutation**.\n\nIf no greater permutation exists, rearrange it into the smallest permutation.\n\n### Example 1\n\n```\nInput:\n[1,2,3]\n\nOutput:\n[1,3,2]\n```\n\n### Example 2\n\n```\nInput:\n[3,2,1]\n\nOutput:\n[1,2,3]\n```\n\nBecause `[3,2,1]` is already the largest permutation.\n\n### Example 3\n\n```\nInput:\n[1,1,5]\n\nOutput:\n[1,5,1]\n```"
      },
      {
        "title": "Approach",
        "content": "There are **exactly 4 important steps**.\n\n### Step 1 ?  Find the pivot\nTraverse from right and find the first index `i` such that:\n\n```\nnums[i] < nums[i + 1]\n```\n\nThis is the position that can be increased.\n\n### Step 2 ?  Find the successor\nFrom the right, find the first element greater than `nums[i]`.\n\nBecause the suffix is decreasing, this is the **smallest element greater than the pivot**.\n\n### Step 3 ?  Swap pivot and successor\n\n```\nswap(nums[i], nums[j])\n```\n\n### Step 4 ?  Reverse the suffix\nReverse:\n\n```\n[i + 1, n-1]\n```\n\nThis converts the suffix into its smallest possible order."
      },
      {
        "title": "Algorithm / Steps",
        "content": "```\n1. Find i from right where nums[i] < nums[i+1].\n\n2. If no such i:\n      reverse entire array\n      return\n\n3. Find j from right where nums[j] > nums[i].\n\n4. Swap nums[i] and nums[j].\n\n5. Reverse nums[i+1 ... n-1].\n```"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    void nextPermutation(vector<int>& nums) {\n        int n = nums.size();\n\n        // Step 1: Find the first decreasing element from the right\n        int i = n - 2;\n\n        while (i >= 0 && nums[i] >= nums[i + 1]) {\n            i--;\n        }\n\n        // If i >= 0, a larger permutation exists\n        if (i >= 0) {\n            // Step 2: Find the smallest element greater than nums[i]\n            // Since the suffix is decreasing, scan from the right\n            int j = n - 1;\n\n            while (nums[j] <= nums[i]) {\n                j--;\n            }\n\n            // Step 3: Swap pivot with its successor\n            swap(nums[i], nums[j]);\n        }\n\n        // Step 4:\n        // Make the suffix as small as possible\n        // If no pivot existed, this reverses the whole array.\n        reverse(nums.begin() + i + 1, nums.end());\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Next Permutation = Pivot → Successor → Swap → Reverse Suffix.**\nMemorize this exact sequence:\n\n```\nP → S → SWAP → REVERSE\n```\n\n### Pivot\n\n```\nnums[i] < nums[i+1]\n```\n\n### Successor\n\n```\nrightmost nums[j] > nums[i]\n```\n\n### Why reverse suffix?\nBefore the swap, suffix is decreasing.\n\nAfter selecting the successor, reverse it to get the **smallest possible suffix**, producing the immediate next permutation.\n\n### Special case\nIf no pivot exists:\n\n```\n[3,2,1]\n```\n\nIt is already the largest permutation.\n\nSimply reverse:\n\n```\n[1,2,3]\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "### Example\n\n```\nnums = [1,2,3]\n```\n\n### Step 1 ?  Find pivot\nStart from right:\n\n```\n2 < 3\n```\n\nTherefore:\n\n```\ni = 1\npivot = 2\n```\n\n### Step 2 ?  Find successor\nFrom right:\n\n```\n3 > 2\n```\n\nTherefore:\n\n```\nj = 2\nsuccessor = 3\n```\n\n### Step 3 ?  Swap\n\n```\n[1,3,2]\n```\n\n### Step 4 ?  Reverse suffix\nSuffix starts at `i + 1 = 2`.\n\nOnly one element:\n\n```\n[1,3,2]\n```\n\nFinal answer:\n\n```\n[1,3,2]\n```\n\n---\n\n## Next Permutation ?  Important Dry Run\n\n```\nnums = [1,2,5,4,3,0,0]\n```\n\n### Step 1: Find pivot\nFrom right:\n\n```\n0 >= 0  ?   continue\n3 >= 0  ?   continue\n4 >= 3  ?   continue\n5 >= 4  ?   continue\n2 < 5   ?   STOP\n```\n\nSo:\n\n```\ni = 1\npivot = 2\n```\n\n### Step 2: Find successor\nScan from right:\n\n```\n0 <= 2\n0 <= 2\n3 > 2  ?   STOP\n```\n\nSo:\n\n```\nj = 4\nsuccessor = 3\n```\n\n### Step 3: Swap\n\n```\n[1,3,5,4,2,0,0]\n```\n\n### Step 4: Reverse suffix\nSuffix:\n\n```\n[5,4,2,0,0]\n```\n\nReverse:\n\n```\n[0,0,2,4,5]\n```\n\nFinal:\n\n```\n[1,3,0,0,2,4,5]\n```\n\nThat is the **immediate next lexicographically greater permutation**.\n\n---\n\n# Final Revision Map\n#ProblemPatternCore TechniqueTimeSpace10Range Sum QueryPrefix SumPrefix arrayBuild `O(n)`, Query `O(1)``O(n)`11Subarray Sum Equals KPrefix SumPrefix Sum + HashMap`O(n)` avg`O(n)`12Continuous Subarray SumPrefix SumPrefix Remainder + HashMap`O(n)` avg`O(min(n,k))`13Product Except SelfPrefix/SuffixLeft ?  Right products`O(n)``O(1)` extra14Two SumHashingComplement + HashMap`O(n)` avg`O(n)`15Longest Consecutive SequenceHashingHashSet + sequence starts`O(n)` avg`O(n)`16Sort ColorsPartitioningDutch National Flag`O(n)``O(1)`17Rotate ArrayReversal3 reversals`O(n)``O(1)`18Next PermutationPartitioningPivot ?   Successor ?   Reverse`O(n)``O(1)`\n\n## Must-Memorize Triggers\n\n```\nRange Sum\n?   Prefix Sum\n\nSubarray Sum = K\n?   Prefix Sum + Frequency Map\n?   currentSum - k\n\nContinuous Subarray Sum\n?   Prefix Sum % k\n?   Same remainder + length >= 2\n\nProduct Except Self\n?   Prefix Product + Suffix Product\n\nTwo Sum\n?   target - current\n?   HashMap\n\nLongest Consecutive\n?   HashSet\n?   Start only if num-1 absent\n\nSort Colors\n?   Dutch National Flag\n?   0 left, 1 middle, 2 right\n\nRotate Array\n?   Reverse All\n?   Reverse First K\n?   Reverse Rest\n\nNext Permutation\n?   Find Pivot\n?   Find Successor\n?   Swap\n?   Reverse Suffix\n```"
      }
    ]
  },
  {
    "number": 19,
    "title": "Valid Anagram",
    "sections": [
      {
        "title": "Problem",
        "content": "Given two strings `s` and `t`, determine whether `t` is an anagram of `s`.\n\nAn anagram contains the **same characters with the same frequencies**, but possibly in a different order.\n\n### Example 1\n\n```\nInput:\ns = \"anagram\"\nt = \"nagaram\"\n\nOutput:\ntrue\n```\n\n### Example 2\n\n```\nInput:\ns = \"rat\"\nt = \"car\"\n\nOutput:\nfalse\n```"
      },
      {
        "title": "Approach",
        "content": "Use a **frequency array**.\n\nFor lowercase English letters:\n\n```\n'a' ?   index 0\n'b' ?   index 1\n...\n'z' ?   index 25\n```\n\nIncrement frequency for `s` and decrement for `t`.\n\nIf all frequencies become `0`, they are anagrams."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. If lengths differ ?   return `false`.\n2. Create `freq[26]`.\n3. For every character in `s`, increment frequency.\n4. For every character in `t`, decrement frequency.\n5. If any frequency is not `0`, return `false`.\n6. Otherwise return `true`."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        // Different lengths cannot be anagrams\n        if (s.size() != t.size()) {\n            return false;\n        }\n\n        vector<int> freq(26, 0);\n\n        // Count characters from s\n        for (char ch : s) {\n            freq[ch - 'a']++;\n        }\n\n        // Remove characters using t\n        for (char ch : t) {\n            freq[ch - 'a']--;\n        }\n\n        // Every frequency must return to zero\n        for (int count : freq) {\n            if (count != 0) {\n                return false;\n            }\n        }\n\n        return true;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)` because the frequency array has 26 entries."
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Anagram = same characters + same frequency.**\n\n```\ns ?   +frequency\nt ?   -frequency\nall 0 ?   anagram\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\ns = \"anagram\"\nt = \"nagaram\"\n```\n\nBoth contain:\n\n```\na ?   3\nn ?   1\ng ?   1\nr ?   1\nm ?   1\n```\n\nAfter adding `s` and subtracting `t`:\n\n```\nall frequencies = 0\n```\n\nTherefore:\n\n```\ntrue\n```\n\n---"
      }
    ]
  },
  {
    "number": 20,
    "title": "Group Anagrams",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an array of strings, group strings that are anagrams of each other.\n\n### Example 1\n\n```\nInput:\n[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]\n\nOutput:\n[\n    [\"eat\",\"tea\",\"ate\"],\n    [\"tan\",\"nat\"],\n    [\"bat\"]\n]\n```\n\n### Example 2\n\n```\nInput:\n[\"\"]\n\nOutput:\n[[\"\"]]\n```"
      },
      {
        "title": "Approach",
        "content": "Use a **HashMap**.\n\nFor every string, create a unique key based on its character frequencies.\n\nFor lowercase English letters:\n\n```\nkey = frequency representation\n```\n\nAnagrams have exactly the same frequency key, so they go into the same group.\n\nA simple alternative is sorting each string, but frequency counting gives `O(n*k)` rather than `O(n*k log k)`."
      },
      {
        "title": "Algorithm / Steps",
        "content": "For every string:\n\n1. Create `freq[26]`.\n2. Count its characters.\n3. Convert the frequency array into a key.\n4. Put the string into:\n```\nmap[key]\n```\n5. Return all map values."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        // Key = character frequency pattern\n        unordered_map<string, vector<string>> groups;\n\n        for (const string& s : strs) {\n            vector<int> freq(26, 0);\n\n            // Count each character\n            for (char ch : s) {\n                freq[ch - 'a']++;\n            }\n\n            // Build a unique key from the frequency array\n            string key;\n\n            for (int count : freq) {\n                key += to_string(count);\n                key += '#'; // Separator prevents ambiguity\n            }\n\n            groups[key].push_back(s);\n        }\n\n        // Collect all groups\n        vector<vector<string>> result;\n\n        for (auto& [key, group] : groups) {\n            result.push_back(group);\n        }\n\n        return result;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "Let:\n\n- `n` = number of strings\n- `k` = maximum string length\n- **Time:** `O(n ?  k)`\n- **Space:** `O(n ?  k)` for storing the groups and keys."
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Group Anagrams → Same frequency → Same HashMap key.**\nTrigger:\n\n```\nAnagrams?\n→ Build common signature\n→ HashMap\n→ Group by signature\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\n[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]\n```\n\n`eat`:\n\n```\na=1, e=1, t=1\n```\n\n`tea`:\n\n```\na=1, e=1, t=1\n```\n\nSame key:\n\n```\neat ?   Group 1\ntea ?   Group 1\n```\n\n`tan` and `nat`:\n\n```\na=1, n=1, t=1\n```\n\nSame key ?   Group 2.\n\n`bat`:\n\n```\na=1, b=1, t=1\n```\n\nDifferent key ?   Group 3.\n\n---"
      }
    ]
  },
  {
    "number": 21,
    "title": "Ransom Note",
    "sections": [
      {
        "title": "Problem",
        "content": "Given strings `ransomNote` and `magazine`, determine whether the ransom note can be constructed using characters from the magazine.\n\nEach magazine character can be used **only once**.\n\n### Example 1\n\n```\nInput:\nransomNote = \"a\"\nmagazine = \"b\"\n\nOutput:\nfalse\n```\n\n### Example 2\n\n```\nInput:\nransomNote = \"aa\"\nmagazine = \"aab\"\n\nOutput:\ntrue\n```"
      },
      {
        "title": "Approach",
        "content": "Count the characters available in `magazine`.\n\nThen consume characters required by `ransomNote`.\n\nIf any required character has frequency `0`, return `false`."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Create frequency array of size 26.\n2. Count characters in `magazine`.\n3. Traverse `ransomNote`.\n4. Decrease frequency.\n5. If frequency becomes negative ?   impossible.\n6. Otherwise return `true`."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    bool canConstruct(string ransomNote, string magazine) {\n        vector<int> freq(26, 0);\n\n        // Count available characters in magazine\n        for (char ch : magazine) {\n            freq[ch - 'a']++;\n        }\n\n        // Use characters required by ransomNote\n        for (char ch : ransomNote) {\n            freq[ch - 'a']--;\n\n            // Not enough copies of this character\n            if (freq[ch - 'a'] < 0) {\n                return false;\n            }\n        }\n\n        return true;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n + m)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Magazine gives supply; ransom note consumes supply.**\n\n```\nmagazine ?   frequency++\nransomNote ?   frequency--\nnegative ?   false\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nransomNote = \"aa\"\nmagazine = \"aab\"\n```\n\nMagazine:\n\n```\na ?   2\nb ?   1\n```\n\nFirst `a`:\n\n```\na ?   1\n```\n\nSecond `a`:\n\n```\na ?   0\n```\n\nNo negative frequency.\n\nAnswer:\n\n```\ntrue\n```\n\n---"
      }
    ]
  },
  {
    "number": 22,
    "title": "First Unique Character in a String",
    "sections": [
      {
        "title": "Problem",
        "content": "Given a string, find the index of the **first non-repeating character**.\n\nReturn `-1` if none exists.\n\n### Example 1\n\n```\nInput:\n\"leetcode\"\n\nOutput:\n0\n```\n\n`l` appears once and is first.\n\n### Example 2\n\n```\nInput:\n\"loveleetcode\"\n\nOutput:\n2\n```\n\n`v` is the first unique character."
      },
      {
        "title": "Approach",
        "content": "Use **two passes**:\n\n1. Count frequency of every character.\n2. Scan the string again.\n3. Return the first character whose frequency is `1`."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Create `freq[26]`.\n2. Count all characters.\n3. Traverse string from left to right.\n4. If `freq[s[i]] == 1`, return `i`.\n5. If no such character exists, return `-1`."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int firstUniqChar(string s) {\n        vector<int> freq(26, 0);\n\n        // First pass: count frequencies\n        for (char ch : s) {\n            freq[ch - 'a']++;\n        }\n\n        // Second pass: find first character appearing once\n        for (int i = 0; i < s.size(); i++) {\n            if (freq[s[i] - 'a'] == 1) {\n                return i;\n            }\n        }\n\n        return -1;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **First unique = frequency first, position second.**\nDo not return while counting; you need the complete frequency information first."
      },
      {
        "title": "Optional Dry Run",
        "content": "```\ns = \"loveleetcode\"\n```\n\nFrequencies show:\n\n```\nl ?   2\no ?   2\nv ?   1\ne ?   4\nt ?   1\nc ?   1\nd ?   1\n```\n\nScan:\n\n```\nl ?   repeated\no ?   repeated\nv ?   frequency 1\n```\n\nIndex of `v`:\n\n```\n2\n```\n\nAnswer:\n\n```\n2\n```\n\n---\n\n# Pattern: Palindrome & String Processing\n\n---"
      }
    ]
  },
  {
    "number": 23,
    "title": "Valid Palindrome",
    "sections": [
      {
        "title": "Problem",
        "content": "Given a string, determine whether it is a palindrome after:\n\n- converting uppercase letters to lowercase\n- removing non-alphanumeric characters.\n\n### Example 1\n\n```\nInput:\n\"A man, a plan, a canal: Panama\"\n\nOutput:\ntrue\n```\n\nNormalized:\n\n```\namanaplanacanalpanama\n```\n\n### Example 2\n\n```\nInput:\n\"race a car\"\n\nOutput:\nfalse\n```"
      },
      {
        "title": "Approach",
        "content": "Use **Two Pointers**.\n\n- `left` starts at beginning.\n- `right` starts at end.\n- Skip non-alphanumeric characters.\n- Compare lowercase versions.\n- Move inward."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Set `left = 0`, `right = n-1`.\n2. Skip non-alphanumeric characters from left.\n3. Skip non-alphanumeric characters from right.\n4. Convert both to lowercase.\n5. If different ?   `false`.\n6. Move both pointers.\n7. If pointers cross ?   `true`."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    bool isPalindrome(string s) {\n        int left = 0;\n        int right = s.size() - 1;\n\n        while (left < right) {\n            // Skip non-alphanumeric characters from the left\n            while (left < right && !isalnum(s[left])) {\n                left++;\n            }\n\n            // Skip non-alphanumeric characters from the right\n            while (left < right && !isalnum(s[right])) {\n                right--;\n            }\n\n            // Compare characters ignoring case\n            if (tolower(s[left]) != tolower(s[right])) {\n                return false;\n            }\n\n            left++;\n            right--;\n        }\n\n        return true;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Palindrome ?   Two pointers from both ends.**\n\n```\nleft ?   ?  \n? ? ? ? right\n\nskip invalid\ncompare lowercase\nmove inward\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\n\"A man, a plan, a canal: Panama\"\n```\n\nCompare:\n\n```\nA ?   a ?   same\nm ?   m ?   same\na ?   a ?   same\nn ?   n ?   same\n...\n```\n\nAll valid characters match.\n\nTherefore:\n\n```\ntrue\n```\n\n---"
      }
    ]
  },
  {
    "number": 24,
    "title": "Longest Palindromic Substring",
    "sections": [
      {
        "title": "Problem",
        "content": "Given a string `s`, return the **longest palindromic substring**.\n\nA substring must be **contiguous**.\n\n### Example 1\n\n```\nInput:\n\"babad\"\n\nOutput:\n\"bab\"\n```\n\n`\"aba\"` is also valid.\n\n### Example 2\n\n```\nInput:\n\"cbbd\"\n\nOutput:\n\"bb\"\n```"
      },
      {
        "title": "Approach",
        "content": "Use **Expand Around Center**.\n\nEvery palindrome has a center.\n\nThere are two types:\n\n### Odd-length palindrome\n\n```\naba\n```\n\nCenter = `b`.\n\n### Even-length palindrome\n\n```\nabba\n```\n\nCenter = gap between the two `b`s.\n\nFor every index, expand in both ways:\n\n```\nexpand(i, i)       ?   odd\nexpand(i, i + 1)   ?   even\n```\n\nTrack the longest palindrome."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Set `start = 0`, `maxLen = 1`.\n2. For each index `i`:\n- Expand around `(i, i)`.\n- Expand around `(i, i+1)`.\n3. During expansion:\n- Compare left and right characters.\n- Expand while equal.\n4. Update longest palindrome.\n5. Return substring."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int expand(string& s, int left, int right) {\n        // Expand while the characters match\n        while (left >= 0 &&\n               right < s.size() &&\n               s[left] == s[right]) {\n            left--;\n            right++;\n        }\n\n        // Return palindrome length\n        return right - left - 1;\n    }\n\n    string longestPalindrome(string s) {\n        if (s.empty()) {\n            return \"\";\n        }\n\n        int start = 0;\n        int maxLen = 1;\n\n        for (int i = 0; i < s.size(); i++) {\n            // Odd-length palindrome\n            int oddLen = expand(s, i, i);\n\n            // Even-length palindrome\n            int evenLen = expand(s, i, i + 1);\n\n            int len = max(oddLen, evenLen);\n\n            // Update only when a longer palindrome is found\n            if (len > maxLen) {\n                maxLen = len;\n\n                // Calculate the starting index\n                start = i - (len - 1) / 2;\n            }\n        }\n\n        return s.substr(start, maxLen);\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n²)`\n- **Space:** `O(1)` auxiliary space."
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Longest Palindromic Substring ?   Expand Around Center.**\nAlways check **both**:\n\n```\n(i, i)     ?   odd\n(i, i + 1) ?   even\n```\n\nThis is the common mistake to avoid."
      },
      {
        "title": "Optional Dry Run",
        "content": "```\ns = \"babad\"\n```\n\nAt `i = 0`:\n\n```\ncenter = b\npalindrome = \"b\"\n```\n\nAt `i = 1`:\n\n```\ncenter = a\n\nExpand:\na\nbab\n\n?   \"bab\"\n```\n\nAt `i = 2`:\n\n```\ncenter = b\n\nExpand:\nb\naba\n\n?   \"aba\"\n```\n\nBoth have length `3`.\n\nThe algorithm can return:\n\n```\n\"bab\"\n```\n\nwhich is valid.\n\n---"
      }
    ]
  },
  {
    "number": 25,
    "title": "Palindromic Substrings",
    "sections": [
      {
        "title": "Problem",
        "content": "Given a string `s`, count the number of **palindromic substrings**.\n\nEvery single character is a palindrome.\n\n### Example 1\n\n```\nInput:\n\"abc\"\n\nOutput:\n3\n```\n\nPalindromes:\n\n```\n\"a\"\n\"b\"\n\"c\"\n```\n\n### Example 2\n\n```\nInput:\n\"aaa\"\n\nOutput:\n6\n```\n\nPalindromes:\n\n```\n\"a\"\n\"a\"\n\"a\"\n\"aa\"\n\"aa\"\n\"aaa\"\n```"
      },
      {
        "title": "Approach",
        "content": "Use **Expand Around Center**, exactly like Longest Palindromic Substring, but instead of tracking the longest one, **count every palindrome found**.\n\nFor every position:\n\n```\nexpand(i, i)       ?   odd-length palindromes\nexpand(i, i + 1)   ?   even-length palindromes\n```\n\nEvery successful expansion represents one palindromic substring."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Set `count = 0`.\n2. For every index `i`:\n3. Expand around `(i, i)`.\n- Every valid expansion ?   `count++`.\n4. Expand around `(i, i+1)`.\n- Every valid expansion ?   `count++`.\n5. Return `count`."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int expand(string& s, int left, int right) {\n        int count = 0;\n\n        // Every successful expansion is one palindrome\n        while (left >= 0 &&\n               right < s.size() &&\n               s[left] == s[right]) {\n\n            count++;\n\n            left--;\n            right++;\n        }\n\n        return count;\n    }\n\n    int countSubstrings(string s) {\n        int count = 0;\n\n        for (int i = 0; i < s.size(); i++) {\n            // Count odd-length palindromes\n            count += expand(s, i, i);\n\n            // Count even-length palindromes\n            count += expand(s, i, i + 1);\n        }\n\n        return count;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n²)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Palindromic Substrings ?   Expand Around Every Center + COUNT every expansion.**\nDifference from #24:\n\n```\nLongest Palindromic Substring\n?   find maximum length\n\nPalindromic Substrings\n?   count every palindrome\n```\n\nAlways check:\n\n```\nodd center  ?   (i, i)\neven center ?   (i, i+1)\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\ns = \"aaa\"\n```\n\n### Center at index 0\nOdd:\n\n```\n\"a\"\n```\n\nCount = `1`\n\nEven:\n\n```\nNo match\n```\n\nTotal = `1`\n\n---\n\n### Center at index 1\nOdd:\n\n```\n\"a\"\n\"aaa\"\n```\n\nCount increases by `2`.\n\nEven:\n\n```\n\"aa\"\n```\n\nCount increases by `1`.\n\nTotal so far:\n\n```\n1 + 3 = 4\n```\n\n---\n\n### Center at index 2\nOdd:\n\n```\n\"a\"\n```\n\nCount = `5`\n\nEven:\n\n```\n\"aa\"\n```\n\nCount = `6`\n\nFinal:\n\n```\n6\n```\n\n---\n\n# Final Revision Map\n#ProblemPatternCore TechniqueTimeSpace19Valid AnagramFrequencyFrequency Array`O(n)``O(1)`20Group AnagramsHashingFrequency Signature + HashMap`O(nk)``O(nk)`21Ransom NoteFrequencyCount + Consume`O(n+m)``O(1)`22First Unique CharacterFrequencyCount ?   Scan`O(n)``O(1)`23Valid PalindromeTwo PointerCompare from both ends`O(n)``O(1)`24Longest Palindromic SubstringPalindromeExpand Around Center`O(n²)``O(1)`25Palindromic SubstringsPalindromeExpand + Count`O(n²)``O(1)`\n\n## Must-Memorize Triggers\n\n```\nValid Anagram\n?   Frequency Array\n\nGroup Anagrams\n?   Frequency Signature\n?   HashMap\n\nRansom Note\n?   Magazine frequency\n?   Consume required characters\n\nFirst Unique Character\n?   Frequency\n?   Second scan for first freq = 1\n\nValid Palindrome\n?   Two Pointers\n?   Skip non-alphanumeric\n?   Case-insensitive comparison\n\nLongest Palindromic Substring\n?   Expand Around Center\n?   (i,i) + (i,i+1)\n?   Track maximum\n\nPalindromic Substrings\n?   Expand Around Center\n?   (i,i) + (i,i+1)\n?   COUNT every successful expansion\n```"
      }
    ]
  },
  {
    "number": 27,
    "title": "Two Sum II ?  Input Array Is Sorted",
    "sections": [
      {
        "title": "Problem",
        "content": "Given a **1-indexed sorted array** `numbers` and a target, find two numbers whose sum equals `target`.\n\nReturn their **1-based indices**.\n\n**Example 1:**\n\n```\nInput: numbers = [2,7,11,15], target = 9\nOutput: [1,2]\n\n2 + 7 = 9\n```\n\n**Example 2:**\n\n```\nInput: numbers = [2,3,4], target = 6\nOutput: [1,3]\n\n2 + 4 = 6\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Since the array is **sorted**, use two pointers:\n\n- `left` ?   beginning\n- `right` ?   end\nCheck `numbers[left] + numbers[right]`.\n\n- If sum == target ?   answer found.\n- If sum < target ?   increase `left` to get a larger value.\n- If sum > target ?   decrease `right` to get a smaller value.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Set `left = 0`.\n2. Set `right = n - 1`.\n3. While `left < right`:\n- Calculate `sum = numbers[left] + numbers[right]`.\n- If `sum == target`, return `{left+1, right+1}`.\n- If `sum < target`, increment `left`.\n- Otherwise decrement `right`.\n4. Return empty vector if no pair exists.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<int> twoSum(vector<int>& numbers, int target) {\n        int left = 0;\n        int right = numbers.size() - 1;\n\n        while (left < right) {\n            int sum = numbers[left] + numbers[right];\n\n            if (sum == target) {\n                // Problem asks for 1-based indices\n                return {left + 1, right + 1};\n            }\n            else if (sum < target) {\n                // Need a larger sum\n                left++;\n            }\n            else {\n                // Need a smaller sum\n                right--;\n            }\n        }\n\n        return {};\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "**Sorted Array + Pair Sum ?   Two Pointers**\n\n```\nleft -----------------> <----------------- right\n\nsum < target ?   left++\nsum > target ?   right--\nsum = target ?   answer\n```\n\n**Remember:**\n`Small sum ?   move left`\n`Large sum ?   move right`\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnumbers = [2, 7, 11, 15]\ntarget = 9\n\nleft = 0 ?   2\nright = 3 ?   15\n\n2 + 15 = 17 > 9\n?   right--\n\n2 + 11 = 13 > 9\n?   right--\n\n2 + 7 = 9\n?   Found\n\nAnswer = [1, 2]\n```\n\n---"
      }
    ]
  },
  {
    "number": 28,
    "title": "3Sum",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an integer array, find **all unique triplets** `[a,b,c]` such that:\n\n```\na + b + c = 0\n```\n\nThe solution must not contain duplicate triplets.\n\n**Example 1:**\n\n```\nInput: nums = [-1,0,1,2,-1,-4]\n\nOutput:\n[[-1,-1,2], [-1,0,1]]\n```\n\n**Example 2:**\n\n```\nInput: nums = [0,1,1]\n\nOutput: []\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use:\n\n**Sorting + Two Pointers**\n\n1. Sort the array.\n2. Fix one element `nums[i]`.\n3. Use two pointers:\n- `left = i + 1`\n- `right = n - 1`\n4. Find two numbers whose sum is `-nums[i]`.\n5. Skip duplicates to avoid repeated triplets.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Sort `nums`.\n2. Loop `i` from `0` to `n-3`.\n3. Skip duplicate `nums[i]`.\n4. If `nums[i] > 0`, break because remaining values are also positive.\n5. Set:\n```\nleft = i + 1\nright = n - 1\n```\n6. Calculate:\n```\nsum = nums[i] + nums[left] + nums[right]\n```\n7. If `sum == 0`:\n- Store triplet.\n- Move both pointers.\n- Skip duplicate values.\n8. If `sum < 0`, increment `left`.\n9. If `sum > 0`, decrement `right`.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        vector<vector<int>> ans;\n\n        // Sort for two-pointer technique\n        // and easy duplicate handling\n        sort(nums.begin(), nums.end());\n\n        int n = nums.size();\n\n        for (int i = 0; i < n - 2; i++) {\n\n            // Skip duplicate first elements\n            if (i > 0 && nums[i] == nums[i - 1])\n                continue;\n\n            // Since array is sorted, no possible\n            // triplet can have sum 0 after this\n            if (nums[i] > 0)\n                break;\n\n            int left = i + 1;\n            int right = n - 1;\n\n            while (left < right) {\n                long long sum = (long long)nums[i]\n                              + nums[left]\n                              + nums[right];\n\n                if (sum == 0) {\n                    ans.push_back({\n                        nums[i],\n                        nums[left],\n                        nums[right]\n                    });\n\n                    left++;\n                    right--;\n\n                    // Skip duplicate second elements\n                    while (left < right &&\n                           nums[left] == nums[left - 1]) {\n                        left++;\n                    }\n\n                    // Skip duplicate third elements\n                    while (left < right &&\n                           nums[right] == nums[right + 1]) {\n                        right--;\n                    }\n                }\n                else if (sum < 0) {\n                    // Need a larger sum\n                    left++;\n                }\n                else {\n                    // Need a smaller sum\n                    right--;\n                }\n            }\n        }\n\n        return ans;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n²)`\n- Sorting: `O(n log n)`\n- Two-pointer search for each element: `O(n²)`\n- **Space:** `O(1)` auxiliary space, excluding output.\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "**3Sum = Sort + Fix One + Two Pointers**\n\n```\ni       left              right\n?          ?                    ?  \n[-4, -1, -1, 0, 1, 2]\n```\n\nMain formula:\n\n```\nnums[i] + nums[left] + nums[right]\n```\n\n**Most important:** Skip duplicates.\n\n```\nif (i > 0 && nums[i] == nums[i-1])\n    continue;\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [-1,0,1,2,-1,-4]\n```\n\nAfter sorting:\n\n```\n[-4,-1,-1,0,1,2]\n```\n\nTake `i = 0`:\n\n```\n-4 + (-1) + 2 = -3\n```\n\nToo small ?   move `left`.\n\nContinue ?   no valid triplet.\n\nNow `i = 1`:\n\n```\n-1 + (-1) + 2 = 0\n```\n\nFound:\n\n```\n[-1,-1,2]\n```\n\nMove both pointers.\n\nNext:\n\n```\n-1 + 0 + 1 = 0\n```\n\nFound:\n\n```\n[-1,0,1]\n```\n\nSkip duplicate `-1` at the next `i`.\n\nFinal:\n\n```\n[[-1,-1,2], [-1,0,1]]\n```\n\n---"
      }
    ]
  },
  {
    "number": 29,
    "title": "Container With Most Water",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an array `height`, where each element represents the height of a vertical line, find two lines that together with the x-axis form a container containing the **maximum amount of water**.\n\n**Example 1:**\n\n```\nInput: height = [1,8,6,2,5,4,8,3,7]\nOutput: 49\n```\n\nUsing heights `8` and `7`:\n\n```\nwidth = 8\nheight = min(8,7) = 7\n\narea = 8 ?  7 = 56\n```\n\nWait ?  the actual maximum is **49**, using indices `1` and `8`:\n\n```\nwidth = 7\nheight = 7\narea = 49\n```\n\n**Example 2:**\n\n```\nInput: height = [1,1]\nOutput: 1\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use two pointers:\n\n```\nleft = 0\nright = n - 1\n```\n\nArea:\n\n```\narea = min(height[left], height[right])\n       ?  (right - left)\n```\n\nThe limiting factor is the **shorter line**.\n\nTherefore:\n\n- If `height[left] < height[right]` ?   move `left`.\n- Otherwise ?   move `right`.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Initialize `left = 0`, `right = n-1`.\n2. Calculate current area.\n3. Update maximum area.\n4. Move the pointer having the smaller height.\n5. Repeat until `left >= right`.\n6. Return maximum area.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        int left = 0;\n        int right = height.size() - 1;\n\n        int maxWater = 0;\n\n        while (left < right) {\n            // Width between the two lines\n            int width = right - left;\n\n            // Water level is limited by shorter line\n            int currentHeight = min(height[left], height[right]);\n\n            int currentArea = width * currentHeight;\n\n            maxWater = max(maxWater, currentArea);\n\n            // Move the shorter line\n            // because moving the taller line cannot\n            // increase the limiting height\n            if (height[left] < height[right]) {\n                left++;\n            }\n            else {\n                right--;\n            }\n        }\n\n        return maxWater;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "Formula:\n\n```\nArea = min(leftHeight, rightHeight) × width\n```\n\n**Key rule:**\n\n> Always move the pointer at the shorter line.\nWhy?\n\nBecause:\n\n```\nWater = shorter height × width\n```\n\nMoving the taller line decreases width while the shorter height still limits the water.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nheight = [1,8,6,2,5,4,8,3,7]\n```\n\nInitially:\n\n```\nleft = 0 ?   1\nright = 8 ?   7\n\nwidth = 8\nheight = min(1,7) = 1\n\narea = 8\n```\n\nLeft is shorter ?   `left++`.\n\nNow:\n\n```\nleft = 1 ?   8\nright = 8 ?   7\n\nwidth = 7\nheight = 7\n\narea = 49\n```\n\nMaximum:\n\n```\nmaxWater = 49\n```\n\nContinue checking smaller widths. None produces more than `49`.\n\n**Answer = 49**\n\n---"
      }
    ]
  },
  {
    "number": 30,
    "title": "Trapping Rain Water",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an array where `height[i]` represents the height of a bar, calculate how much rainwater can be trapped after raining.\n\n**Example 1:**\n\n```\nInput: height = [0,1,0,2,1,0,1,3,2,1,2,1]\n\nOutput: 6\n```\n\n**Example 2:**\n\n```\nInput: height = [4,2,0,3,2,5]\n\nOutput: 9\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use **two pointers** with:\n\n```\nleftMax\nrightMax\n```\n\nWater at a position depends on:\n\n```\nmin(leftMax, rightMax) - height[i]\n```\n\nInstead of storing left/right arrays, maintain maximum heights while moving inward.\n\nKey observation:\n\n- If `height[left] <= height[right]`, process the **left side**.\n- Otherwise process the **right side**.\nBecause the smaller side determines the water level.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Initialize:\n```\nleft = 0\nright = n-1\nleftMax = 0\nrightMax = 0\nwater = 0\n```\n2. While `left < right`:\n3. If `height[left] <= height[right]`:\n- If `height[left] >= leftMax`, update `leftMax`.\n- Otherwise add:\n```\nleftMax - height[left]\n```\n- Move `left++`.\n4. Otherwise:\n- If `height[right] >= rightMax`, update `rightMax`.\n- Otherwise add:\n```\nrightMax - height[right]\n```\n- Move `right--`.\n5. Return `water`.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int trap(vector<int>& height) {\n        int left = 0;\n        int right = height.size() - 1;\n\n        int leftMax = 0;\n        int rightMax = 0;\n\n        int water = 0;\n\n        while (left < right) {\n\n            // Process the side with smaller height\n            if (height[left] <= height[right]) {\n\n                // Update maximum boundary on left\n                if (height[left] >= leftMax) {\n                    leftMax = height[left];\n                }\n                else {\n                    // Water trapped above current bar\n                    water += leftMax - height[left];\n                }\n\n                left++;\n            }\n            else {\n\n                // Update maximum boundary on right\n                if (height[right] >= rightMax) {\n                    rightMax = height[right];\n                }\n                else {\n                    // Water trapped above current bar\n                    water += rightMax - height[right];\n                }\n\n                right--;\n            }\n        }\n\n        return water;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "The fundamental formula is:\n\n```\nWater[i] =\nmin(maxLeft[i], maxRight[i]) - height[i]\n```\n\nOptimized using two pointers:\n\n```\nheight[left] <= height[right]\n        ?  \nprocess left\n\nheight[left] > height[right]\n        ?  \nprocess right\n```\n\n**Remember:**\n\n> Smaller boundary decides which side can be safely processed.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nheight = [4,2,0,3,2,5]\n```\n\nStart:\n\n```\nleft = 0\nright = 5\nleftMax = 0\nrightMax = 0\nwater = 0\n```\n\n### Step 1\n\n```\nheight[left] = 4\nheight[right] = 5\n\n4 < 5 ?   process left\n\nleftMax = 4\nleft++\n```\n\n### Step 2\n\n```\nleft = 1\nheight[left] = 2\n\nleftMax = 4\n\nwater += 4 - 2\n       = 2\n```\n\n### Step 3\n\n```\nheight[left] = 0\n\nwater += 4 - 0\n       = 4\n```\n\nTotal:\n\n```\nwater = 6\n```\n\n### Step 4\n\n```\nheight[left] = 3\n\nwater += 4 - 3\n       = 1\n```\n\nTotal:\n\n```\nwater = 7\n```\n\n### Right side processing\nEventually:\n\n```\nheight = 2\nrightMax = 5\n\nwater += 5 - 2 = 3\n```\n\nFinal:\n\n```\nwater = 9\n```\n\n**Answer = 9**\n\n---\n\n# Two Pointers ?  Pattern: Fast & Slow / In-Place"
      }
    ]
  },
  {
    "number": 31,
    "title": "Squares of a Sorted Array",
    "sections": [
      {
        "title": "Problem",
        "content": "Given a **non-decreasing sorted array** containing negative and positive integers, return a new array containing the squares of every number, also sorted in non-decreasing order.\n\n**Example 1:**\n\n```\nInput: nums = [-4,-1,0,3,10]\n\nOutput: [0,1,9,16,100]\n```\n\n**Example 2:**\n\n```\nInput: nums = [-7,-3,2,3,11]\n\nOutput: [4,9,9,49,121]\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Simply squaring the sorted array does **not** preserve sorting because negative numbers become positive.\n\nExample:\n\n```\n[-4,-1,0,3]\n\nSquares:\n[16,1,0,9]   ?R not sorted\n```\n\nThe **largest square** must come from either:\n\n- the most negative number on the left, or\n- the largest positive number on the right.\nSo use two pointers:\n\n```\nleft ?   beginning\nright ?   end\n```\n\nFill the result **from right to left** with the larger square.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Create result array of size `n`.\n2. Set:\n```\nleft = 0\nright = n-1\nposition = n-1\n```\n3. Compare:\n```\nnums[left]^2\nnums[right]^2\n```\n4. Put the larger square at `result[position]`.\n5. Move the corresponding pointer.\n6. Decrease `position`.\n7. Continue until `left > right`.\n8. Return result.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<int> sortedSquares(vector<int>& nums) {\n        int n = nums.size();\n\n        vector<int> result(n);\n\n        int left = 0;\n        int right = n - 1;\n        int position = n - 1;\n\n        // Fill result from largest to smallest\n        while (left <= right) {\n\n            int leftSquare = nums[left] * nums[left];\n            int rightSquare = nums[right] * nums[right];\n\n            if (leftSquare > rightSquare) {\n                result[position] = leftSquare;\n                left++;\n            }\n            else {\n                result[position] = rightSquare;\n                right--;\n            }\n\n            position--;\n        }\n\n        return result;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(n)` for the output array.\n- **Auxiliary Space:** `O(1)` excluding the output.\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "**Sorted input + Negative values ?   Two Pointers**\n\n```\n[-7, -3, 2, 3, 11]\n  ?               ?  \n left          right\n```\n\nCompare:\n\n```\nabs(nums[left]) vs abs(nums[right])\n```\n\nThe larger absolute value gives the larger square.\n\nFill:\n\n```\nresult[n-1] ?   result[0]\n```\n\n**Memory trick:**\n\n> Largest squares come from the two ends ?   put them from RIGHT to LEFT.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [-7,-3,2,3,11]\n```\n\nResult:\n\n```\n[_,_,_,_,_]\n```\n\n### Step 1\n\n```\nleft = -7 ?   square = 49\nright = 11 ?   square = 121\n\n121 is larger\n\nresult[4] = 121\nright--\n```\n\n```\n[_,_,_,_,121]\n```\n\n### Step 2\n\n```\nleft = -7 ?   49\nright = 3 ?   9\n\n49 is larger\n\nresult[3] = 49\nleft++\n```\n\n```\n[_,_,_,49,121]\n```\n\n### Step 3\n\n```\nleft = -3 ?   9\nright = 3 ?   9\n\nequal\n\nresult[2] = 9\nright--\n```\n\n### Step 4\n\n```\nleft = -3 ?   9\nright = 2 ?   4\n\nresult[1] = 9\nleft++\n```\n\n### Step 5\n\n```\nleft = 2 ?   4\n\nresult[0] = 4\n```\n\nFinal:\n\n```\n[4,9,9,49,121]\n```\n\n**Answer = `[4,9,9,49,121]`**"
      }
    ]
  },
  {
    "number": 32,
    "title": "Find All Anagrams in a String",
    "sections": [
      {
        "title": "Problem",
        "content": "Given strings `s` and `p`, find all starting indices of substrings in `s` that are anagrams of `p`.\n\n**Example 1:**\n\n```\nInput:\ns = \"cbaebabacd\"\np = \"abc\"\n\nOutput: [0,6]\n\n\"cba\" ?   anagram of \"abc\"\n\"bac\" ?   anagram of \"abc\"\n```\n\n**Example 2:**\n\n```\nInput:\ns = \"abab\"\np = \"ab\"\n\nOutput: [0,1,2]\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Since every required substring has exactly `p.length()` characters, use a **fixed-size sliding window**.\n\nMaintain:\n\n- Frequency of characters in `p`\n- Frequency of characters in current window\nWhen window size becomes `p.length()`:\n\n- Compare frequencies.\n- If equal ?   anagram found.\n- Remove the leftmost character before moving forward.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Create frequency arrays of size `26`.\n2. Store frequency of characters in `p`.\n3. Create a window of size `p.length()`.\n4. Add characters while expanding right.\n5. When window size exceeds `p.length()`, remove `s[left]`.\n6. If both frequency arrays are equal, store `left`.\n7. Continue until `right` reaches the end.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<int> findAnagrams(string s, string p) {\n        vector<int> ans;\n\n        if (p.size() > s.size())\n            return ans;\n\n        vector<int> need(26, 0);\n        vector<int> window(26, 0);\n\n        // Frequency of pattern\n        for (char c : p) {\n            need[c - 'a']++;\n        }\n\n        int left = 0;\n        int k = p.size();\n\n        for (int right = 0; right < s.size(); right++) {\n            window[s[right] - 'a']++;\n\n            // Maintain fixed window size\n            if (right - left + 1 > k) {\n                window[s[left] - 'a']--;\n                left++;\n            }\n\n            // Check anagram\n            if (right - left + 1 == k &&\n                window == need) {\n                ans.push_back(left);\n            }\n        }\n\n        return ans;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\nFrequency comparison is over only 26 characters.\n- **Space:** `O(1)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "**Anagram ?   Fixed Window of `p.length()`**\n\n```\nPattern frequency\n        ?  \nFixed window\n        ?  \nCompare frequency\n        ?  \nAnagram ?   store index\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\ns = \"abab\"\np = \"ab\"\n```\n\nRequired:\n\n```\na ?   1\nb ?   1\n```\n\nWindow 1:\n\n```\n\"ab\"\n```\n\nFrequency matches ?   index `0`.\n\nWindow 2:\n\n```\n\"ba\"\n```\n\nFrequency matches ?   index `1`.\n\nWindow 3:\n\n```\n\"ab\"\n```\n\nFrequency matches ?   index `2`.\n\nAnswer:\n\n```\n[0,1,2]\n```\n\n---"
      }
    ]
  },
  {
    "number": 33,
    "title": "Permutation in String",
    "sections": [
      {
        "title": "Problem",
        "content": "Given strings `s1` and `s2`, determine whether `s2` contains a permutation of `s1` as a substring.\n\n**Example 1:**\n\n```\nInput:\ns1 = \"ab\"\ns2 = \"eidbaooo\"\n\nOutput: true\n\n\"ba\" is a permutation of \"ab\"\n```\n\n**Example 2:**\n\n```\nInput:\ns1 = \"ab\"\ns2 = \"eidboaoo\"\n\nOutput: false\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "A permutation has:\n\n- Same length\n- Same character frequencies\nTherefore, use a **fixed-size sliding window** of size `s1.length()` over `s2`.\n\nIf window frequency equals `s1` frequency ?   permutation exists.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. If `s1.length() > s2.length()`, return `false`.\n2. Count characters of `s1`.\n3. Create a window of size `s1.length()`.\n4. Expand right.\n5. Remove left character when window becomes too large.\n6. Compare frequencies.\n7. If equal ?   return `true`.\n8. If no window matches ?   return `false`.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    bool checkInclusion(string s1, string s2) {\n        if (s1.size() > s2.size())\n            return false;\n\n        vector<int> need(26, 0);\n        vector<int> window(26, 0);\n\n        for (char c : s1) {\n            need[c - 'a']++;\n        }\n\n        int left = 0;\n        int k = s1.size();\n\n        for (int right = 0; right < s2.size(); right++) {\n            window[s2[right] - 'a']++;\n\n            // Keep window size fixed\n            if (right - left + 1 > k) {\n                window[s2[left] - 'a']--;\n                left++;\n            }\n\n            if (right - left + 1 == k &&\n                window == need) {\n                return true;\n            }\n        }\n\n        return false;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "**Permutation in String = Find Anagram**\n\n```\ns1 = pattern\ns2 = main string\n\nFixed window size = s1.length()\n```\n\nDifference from #32:\n\n- #32 ?   return **all indices**\n- #33 ?   return **true/false**\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\ns1 = \"ab\"\ns2 = \"eidbaooo\"\n```\n\nWindows of size `2`:\n\n```\nei ?   no\nid ?   no\ndb ?   no\nba ?   YES\n```\n\n`\"ba\"` is a permutation of `\"ab\"`.\n\n```\nAnswer = true\n```\n\n---\n\n# Pattern: Variable Window"
      }
    ]
  },
  {
    "number": 34,
    "title": "Longest Substring Without Repeating Characters",
    "sections": [
      {
        "title": "Problem",
        "content": "Find the length of the longest substring without duplicate characters.\n\n**Example 1:**\n\n```\nInput: s = \"abcabcbb\"\nOutput: 3\n\n\"abc\"\n```\n\n**Example 2:**\n\n```\nInput: s = \"bbbbb\"\nOutput: 1\n\n\"b\"\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use a **variable-size sliding window**.\n\nMaintain a window containing only unique characters.\n\nWhen a duplicate appears:\n\n```\nmove left\n```\n\nuntil the duplicate is removed.\n\nUse a frequency array or last-seen index.\n\nThe **last-seen index** gives the cleanest `O(n)` solution.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Maintain `left = 0`.\n2. Store the last index of every character.\n3. For every `right`:\n- If character was previously seen inside current window, move `left`.\n- Update its last position.\n- Calculate current window length.\n4. Keep maximum length.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        vector<int> lastSeen(256, -1);\n\n        int left = 0;\n        int maxLen = 0;\n\n        for (int right = 0; right < s.size(); right++) {\n            char c = s[right];\n\n            // If character already exists inside\n            // current window, move left\n            if (lastSeen[c] >= left) {\n                left = lastSeen[c] + 1;\n            }\n\n            lastSeen[c] = right;\n\n            maxLen = max(maxLen, right - left + 1);\n        }\n\n        return maxLen;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)` for fixed ASCII character set.\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "```\nDuplicate found\n      ?  \nleft = lastSeen[character] + 1\n      ?  \nUpdate maximum\n```\n\n**Pattern:**\n\n> Expand right, and whenever duplicate appears, shrink from left.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\ns = \"abcabcbb\"\n```\n\n```\na ?   \"a\" ?   1\nb ?   \"ab\" ?   2\nc ?   \"abc\" ?   3\na ?   duplicate\n     left moves after previous a\n     \"bca\" ?   3\n```\n\nMaximum remains:\n\n```\n3\n```\n\nAnswer:\n\n```\n3\n```\n\n---"
      }
    ]
  },
  {
    "number": 35,
    "title": "Longest Repeating Character Replacement",
    "sections": [
      {
        "title": "Problem",
        "content": "Given a string `s` and integer `k`, you can replace at most `k` characters.\n\nFind the length of the longest substring containing the same character after at most `k` replacements.\n\n**Example 1:**\n\n```\nInput:\ns = \"ABAB\"\nk = 2\n\nOutput: 4\n```\n\n**Example 2:**\n\n```\nInput:\ns = \"AABABBA\"\nk = 1\n\nOutput: 4\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "For a window:\n\n```\nwindow length = right - left + 1\n```\n\nSuppose the most frequent character occurs `maxFreq` times.\n\nCharacters that need replacement:\n\n```\nwindowLength - maxFreq\n```\n\nIf this exceeds `k`, shrink the window.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Maintain frequency of characters.\n2. Expand `right`.\n3. Update `maxFreq`.\n4. Calculate:\n```\nreplacements = windowLength - maxFreq\n```\n5. If replacements > `k`, increment `left`.\n6. Update maximum window length.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int characterReplacement(string s, int k) {\n        vector<int> freq(26, 0);\n\n        int left = 0;\n        int maxFreq = 0;\n        int maxLen = 0;\n\n        for (int right = 0; right < s.size(); right++) {\n\n            freq[s[right] - 'A']++;\n\n            maxFreq = max(maxFreq,\n                          freq[s[right] - 'A']);\n\n            int windowLength = right - left + 1;\n\n            // Characters other than the most frequent\n            // one need to be replaced\n            int replacements = windowLength - maxFreq;\n\n            if (replacements > k) {\n                freq[s[left] - 'A']--;\n                left++;\n            }\n\n            maxLen = max(maxLen, right - left + 1);\n        }\n\n        return maxLen;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "The most important formula:\n\n```\nwindowSize - maxFrequency <= k\n```\n\nIf:\n\n```\nwindowSize - maxFrequency > k\n```\n\n?   shrink window.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\ns = \"AABABBA\"\nk = 1\n```\n\nConsider:\n\n```\n\"AABA\"\n```\n\nFrequency:\n\n```\nA = 3\nB = 1\n```\n\nWindow size:\n\n```\n4\n```\n\nRequired replacements:\n\n```\n4 - 3 = 1\n```\n\nAllowed:\n\n```\nk = 1\n```\n\nValid ?   length `4`.\n\nNext expansion gives a window requiring more than one replacement, so we shrink.\n\nAnswer:\n\n```\n4\n```\n\n---"
      }
    ]
  },
  {
    "number": 36,
    "title": "Minimum Size Subarray Sum",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an array of **positive integers** and a target, find the minimum length of a contiguous subarray whose sum is greater than or equal to `target`.\n\n**Example 1:**\n\n```\nInput:\ntarget = 7\nnums = [2,3,1,2,4,3]\n\nOutput: 2\n\n[4,3] ?   sum = 7\n```\n\n**Example 2:**\n\n```\nInput:\ntarget = 4\nnums = [1,4,4]\n\nOutput: 1\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use variable-size sliding window.\n\n- Expand `right` ?   increase sum.\n- Once `sum >= target`, try shrinking from left.\n- Every valid window is a candidate.\n- Keep the minimum length.\n**Positive numbers are important** because removing an element always decreases the sum.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Initialize `left = 0`, `sum = 0`.\n2. Expand `right`.\n3. Add `nums[right]`.\n4. While `sum >= target`:\n- Update minimum length.\n- Remove `nums[left]`.\n- Move `left`.\n5. Return minimum length.\n6. If no valid subarray exists, return `0`.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int minSubArrayLen(int target, vector<int>& nums) {\n        int left = 0;\n        long long sum = 0;\n\n        int minLen = INT_MAX;\n\n        for (int right = 0; right < nums.size(); right++) {\n            sum += nums[right];\n\n            // Shrink while current window is valid\n            while (sum >= target) {\n                minLen = min(minLen, right - left + 1);\n\n                sum -= nums[left];\n                left++;\n            }\n        }\n\n        return minLen == INT_MAX ? 0 : minLen;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "```\nsum < target\n    ?  \nexpand right\n\nsum >= target\n    ?  \nshrink left\n    ?  \nfind minimum\n```\n\n**Important:** Works because array contains **positive integers**.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\ntarget = 7\nnums = [2,3,1,2,4,3]\n```\n\nExpand:\n\n```\n2 ?   sum 2\n2+3 ?   sum 5\n2+3+1 ?   sum 6\n2+3+1+2 ?   sum 8\n```\n\nNow valid.\n\nShrink:\n\n```\n[2,3,1,2] ?   length 4\nremove 2\n\n[3,1,2] ?   sum 6\n```\n\nContinue:\n\n```\n[3,1,2,4] ?   sum 10\n```\n\nShrink:\n\n```\n[1,2,4] ?   sum 7 ?   length 3\n```\n\nThen:\n\n```\n[2,4] ?   sum 6\n```\n\nLater:\n\n```\n[4,3] ?   sum 7 ?   length 2\n```\n\nMinimum:\n\n```\n2\n```\n\n---"
      }
    ]
  },
  {
    "number": 37,
    "title": "Longest Subarray With Sum at Most K",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an array of **non-negative integers** and an integer `k`, find the length of the longest contiguous subarray whose sum is at most `k`.\n\n> **Important:** The sliding-window solution requires non-negative numbers. With arbitrary negative numbers, this approach is not valid.\n**Example 1:**\n\n```\nInput:\nnums = [1,2,1,0,1]\nk = 4\n\nOutput: 4\n\n[1,2,1,0] ?   sum = 4\n```\n\n**Example 2:**\n\n```\nInput:\nnums = [2,1,1,1,2]\nk = 4\n\nOutput: 3\n\n[1,1,1] ?   sum = 3\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use a variable-size sliding window.\n\n- Expand `right`.\n- If sum becomes greater than `k`, move `left` until sum becomes valid again.\n- Track the maximum valid window length.\nBecause all values are non-negative, removing elements from the left can only decrease the sum.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Initialize:\n```\nleft = 0\nsum = 0\nmaxLen = 0\n```\n2. Expand `right`.\n3. Add `nums[right]`.\n4. While `sum > k`:\n- Remove `nums[left]`.\n- Increment `left`.\n5. Current window is valid.\n6. Update maximum length.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int longestSubarrayAtMostK(vector<int>& nums, int k) {\n        int left = 0;\n        long long sum = 0;\n        int maxLen = 0;\n\n        for (int right = 0; right < nums.size(); right++) {\n            sum += nums[right];\n\n            // Shrink until sum becomes valid\n            while (sum > k) {\n                sum -= nums[left];\n                left++;\n            }\n\n            maxLen = max(maxLen, right - left + 1);\n        }\n\n        return maxLen;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "Condition:\n\n```\nsum <= k ?   valid\nsum > k  ?   shrink\n```\n\nThen:\n\n```\nmaxLen = max(maxLen, windowSize)\n```\n\n**Remember:**\nThis direct sliding-window method requires **non-negative elements**.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [1,2,1,0,1]\nk = 4\n```\n\nExpand:\n\n```\n[1]       sum = 1 ?   valid ?   len 1\n[1,2]     sum = 3 ?   valid ?   len 2\n[1,2,1]   sum = 4 ?   valid ?   len 3\n[1,2,1,0] sum = 4 ?   valid ?   len 4\n```\n\nAdd `1`:\n\n```\nsum = 5 > 4\n```\n\nShrink:\n\n```\nremove 1 ?   sum = 4\nwindow = [2,1,0,1]\nlength = 4\n```\n\nAnswer:\n\n```\n4\n```\n\n---\n\n# Pattern: Advanced Window"
      }
    ]
  },
  {
    "number": 38,
    "title": "Minimum Window Substring",
    "sections": [
      {
        "title": "Problem",
        "content": "Given strings `s` and `t`, find the smallest substring of `s` that contains **all characters of `t` including duplicates**.\n\n**Example 1:**\n\n```\nInput:\ns = \"ADOBECODEBANC\"\nt = \"ABC\"\n\nOutput:\n\"BANC\"\n```\n\n**Example 2:**\n\n```\nInput:\ns = \"a\"\nt = \"aa\"\n\nOutput:\n\"\"\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use a variable sliding window with frequency tracking.\n\nWe need every character from `t`.\n\nMaintain:\n\n- `need[c]` ?   required frequency\n- `window[c]` ?   current frequency\n- `formed` ?   number of character requirements currently satisfied\nWhen the window becomes valid:\n\n```\nformed == required\n```\n\nshrink from the left to find the smallest valid window.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Count required characters of `t`.\n2. Set:\n```\nleft = 0\nformed = 0\n```\n3. Expand `right`.\n4. Add `s[right]` to window.\n5. If frequency becomes exactly the required frequency, increment `formed`.\n6. While `formed == required`:\n- Update minimum window.\n- Remove `s[left]`.\n- If its frequency becomes less than required, decrement `formed`.\n- Move `left`.\n7. Return the minimum window.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    string minWindow(string s, string t) {\n        if (t.size() > s.size())\n            return \"\";\n\n        vector<int> need(128, 0);\n        vector<int> window(128, 0);\n\n        // Required character frequencies\n        for (char c : t) {\n            need[c]++;\n        }\n\n        int required = 0;\n\n        // Number of distinct characters required\n        for (int i = 0; i < 128; i++) {\n            if (need[i] > 0)\n                required++;\n        }\n\n        int formed = 0;\n        int left = 0;\n\n        int minLen = INT_MAX;\n        int minStart = 0;\n\n        for (int right = 0; right < s.size(); right++) {\n            char c = s[right];\n            window[c]++;\n\n            // Character requirement is satisfied\n            if (need[c] > 0 &&\n                window[c] == need[c]) {\n                formed++;\n            }\n\n            // Try shrinking valid window\n            while (formed == required) {\n\n                int currentLen = right - left + 1;\n\n                if (currentLen < minLen) {\n                    minLen = currentLen;\n                    minStart = left;\n                }\n\n                char leftChar = s[left];\n                window[leftChar]--;\n\n                // Window is no longer satisfying\n                // this character requirement\n                if (need[leftChar] > 0 &&\n                    window[leftChar] < need[leftChar]) {\n                    formed--;\n                }\n\n                left++;\n            }\n        }\n\n        return minLen == INT_MAX\n            ? \"\"\n            : s.substr(minStart, minLen);\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n + m)`\n- `n = s.length()`\n- `m = t.length()`\n- **Space:** `O(1)` for fixed character set.\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "**Minimum Window = Expand ?   Valid ?   Shrink**\n\n```\nExpand right\n     ?  \nWindow becomes valid\n     ?  \nShrink left\n     ?  \nFind smallest valid window\n```\n\nMost important condition:\n\n```\nformed == required\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\ns = \"ADOBECODEBANC\"\nt = \"ABC\"\n```\n\nRequired:\n\n```\nA = 1\nB = 1\nC = 1\n```\n\nAs we expand, window eventually becomes:\n\n```\n\"ADOBEC\"\n```\n\nIt contains A, B and C.\n\nNow shrink from left:\n\n```\n\"ADOBEC\"\n```\n\nRemove unnecessary characters while keeping A/B/C.\n\nLater another valid window appears:\n\n```\n\"EBANC\"\n```\n\nShrink:\n\n```\n\"BANC\"\n```\n\n`\"BANC\"` contains:\n\n```\nB ?   1\nA ?   1\nN ?   extra\nC ?   1\n```\n\nNo smaller valid window exists.\n\nAnswer:\n\n```\n\"BANC\"\n```\n\n---"
      }
    ]
  },
  {
    "number": 39,
    "title": "Sliding Window Maximum",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an integer array and window size `k`, return the maximum value in every sliding window.\n\n**Example 1:**\n\n```\nInput:\nnums = [1,3,-1,-3,5,3,6,7]\nk = 3\n\nOutput:\n[3,3,5,5,6,7]\n```\n\n**Example 2:**\n\n```\nInput:\nnums = [1]\nk = 1\n\nOutput:\n[1]\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "A normal sliding window cannot efficiently find the maximum every time.\n\nUse a **monotonic deque**.\n\nThe deque stores **indices** and maintains values in decreasing order:\n\n```\nlargest ?   smallest\n```\n\nRules:\n\n1. Remove indices outside the current window.\n2. Remove smaller elements from the back because they can never become maximum while the larger element is present.\n3. The front always contains the index of the maximum element.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Create a deque `dq`.\n2. For every index `i`:\n- Remove indices outside current window:\n```\ndq.front() <= i-k\n```\n- Remove from back while:\n```\nnums[dq.back()] <= nums[i]\n```\n- Add `i`.\n3. Once `i >= k-1`, the window is complete.\n4. `nums[dq.front()]` is the maximum.\n5. Store it.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<int> maxSlidingWindow(vector<int>& nums, int k) {\n        vector<int> ans;\n\n        deque<int> dq; // Stores indices\n\n        for (int i = 0; i < nums.size(); i++) {\n\n            // Remove indices that are outside\n            // the current window\n            while (!dq.empty() && dq.front() <= i - k) {\n                dq.pop_front();\n            }\n\n            // Remove smaller elements from the back.\n            // They can never be maximum while nums[i]\n            // is inside the window.\n            while (!dq.empty() &&\n                   nums[dq.back()] <= nums[i]) {\n                dq.pop_back();\n            }\n\n            // Add current index\n            dq.push_back(i);\n\n            // Window is ready\n            if (i >= k - 1) {\n                ans.push_back(nums[dq.front()]);\n            }\n        }\n\n        return ans;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(k)`\nWhy `O(n)`?\n\nEvery index is:\n\n- Added to deque once.\n- Removed from deque at most once.\nSo total deque operations are linear.\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "**Sliding Window Maximum ?   Monotonic Deque**\n\nDeque maintains:\n\n```\nlargest\n   ?  \nsmaller\n   ?  \nsmaller\n```\n\nTherefore:\n\n```\ndq.front()\n```\n\nalways gives the maximum element of the current window.\n\n### Three rules to memorize:\n\n```\n1. Remove expired indices\n2. Remove smaller values from back\n3. Front = maximum\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [1,3,-1,-3,5,3,6,7]\nk = 3\n```\n\nWindow:\n\n```\n[1,3,-1]\n```\n\nDeque keeps:\n\n```\n3, -1\n```\n\nMaximum:\n\n```\n3\n```\n\nNext:\n\n```\n[3,-1,-3]\n```\n\nMaximum:\n\n```\n3\n```\n\nNext:\n\n```\n[-1,-3,5]\n```\n\n`5` is larger, so smaller elements are removed.\n\nMaximum:\n\n```\n5\n```\n\nContinue:\n\n```\n[-3,5,3] → 5\n[5,3,6]  → 6\n[3,6,7]  → 7\n```\n\nFinal:\n\n```\n[3,3,5,5,6,7]\n```\n\n---\n\n# 🔥 Sliding Window Revision Cheat Sheet\nProblemWindow TypeMain Technique**32. Find All Anagrams**FixedFrequency + fixed window**33. Permutation in String**FixedFrequency + fixed window**34. Longest Substring Without Repeating**VariableLast-seen index**35. Character Replacement**Variable`windowSize - maxFreq <= k`**36. Minimum Size Subarray Sum**VariableExpand → shrink when `sum >= target`**37. Longest Subarray Sum ≤ K**VariableExpand → shrink when `sum > k`**38. Minimum Window Substring**AdvancedFrequency + formed + shrink**39. Sliding Window Maximum**AdvancedMonotonic deque\n\n### The core patterns to memorize\n\n```\nFIXED WINDOW\n────────────\nWindow size is known\n        ↓\nAdd right\n        ↓\nRemove left\n        ↓\nCheck condition\n```\n\n```\nVARIABLE WINDOW\n───────────────\nExpand right\n      ↓\nCondition violated?\n      ↓\nShrink left\n      ↓\nUpdate answer\n```\n\n```\nMINIMUM WINDOW\n──────────────\nExpand → become valid → shrink aggressively\n```\n\n```\nMAXIMUM WINDOW VALUE\n────────────────────\nUse monotonic deque\nFront = maximum\n```\n\n**Most important distinction:**\n`#32/#33` → fixed window\n`#34–#38` → variable window\n`#39` → variable window + monotonic deque."
      }
    ]
  },
  {
    "number": 40,
    "title": "Valid Parentheses",
    "sections": [
      {
        "title": "Problem",
        "content": "Given a string containing `()`, `{}`, and `[]`, determine whether the brackets are valid.\n\nA string is valid when:\n\n- Every opening bracket has a matching closing bracket.\n- Brackets close in the correct order.\n**Example 1:**\n\n```\nInput: s = \"()[]{}\"\nOutput: true\n```\n\n**Example 2:**\n\n```\nInput: s = \"([)]\"\nOutput: false\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use a **stack**.\n\n- Opening bracket ?   push it.\n- Closing bracket ?   check whether the stack top is its matching opening bracket.\n- If not ?   invalid.\n- At the end, stack must be empty.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Create an empty stack.\n2. Traverse the string.\n3. If character is an opening bracket ?   push it.\n4. Otherwise:\n- If stack is empty ?   `false`.\n- Check matching opening bracket.\n- If mismatch ?   `false`.\n- Otherwise pop.\n5. Return `stack.empty()`.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    bool isValid(string s) {\n        stack<char> st;\n\n        for (char c : s) {\n\n            // Opening brackets\n            if (c == '(' || c == '{' || c == '[') {\n                st.push(c);\n            }\n            else {\n                // No opening bracket available\n                if (st.empty())\n                    return false;\n\n                char top = st.top();\n\n                // Check matching pair\n                if ((c == ')' && top != '(') ||\n                    (c == '}' && top != '{') ||\n                    (c == ']' && top != '[')) {\n                    return false;\n                }\n\n                st.pop();\n            }\n        }\n\n        // Valid only if all brackets were matched\n        return st.empty();\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(n)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "```\nOpening ?   PUSH\nClosing ?   MATCH TOP ?   POP\n```\n\n**Golden rule:**\n\n> Closing bracket must match the most recently opened bracket.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\ns = \"([{}])\"\n```\n\n```\n( ?   push ?   [(]\n[ ?   push ?   [(,[]\n{ ?   push ?   [(,[,{]\n} ?   matches { ?   pop\n] ?   matches [ ?   pop\n) ?   matches ( ?   pop\n```\n\nStack empty:\n\n```\ntrue\n```\n\n---"
      }
    ]
  },
  {
    "number": 41,
    "title": "Min Stack",
    "sections": [
      {
        "title": "Problem",
        "content": "Design a stack supporting:\n\n- `push`\n- `pop`\n- `top`\n- `getMin`\nAll operations must work in **O(1)** time.\n\n**Example 1:**\n\n```\npush(-2)\npush(0)\npush(-3)\n\ngetMin() ?   -3\n\npop()\n\ntop() ?   0\ngetMin() ?   -2\n```\n\n**Example 2:**\n\n```\npush(2)\npush(1)\npush(3)\n\ngetMin() ?   1\npop()\n\ngetMin() ?   1\npop()\n\ngetMin() ?   2\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Maintain **two stacks**:\n\n```\nmainStack ?   all elements\nminStack  ?   minimum element at each level\n```\n\nWhen pushing:\n\n```\nminStack.push(min(current, previousMin))\n```\n\nTherefore, `minStack.top()` always gives the current minimum.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "**Push:**\n\n1. Push value into main stack.\n2. Push `min(value, current minimum)` into min stack.\n**Pop:**\n\n1. Pop both stacks.\n**Top:**\n\n1. Return main stack top.\n**GetMin:**\n\n1. Return min stack top.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass MinStack {\nprivate:\n    stack<int> st;\n    stack<int> minSt;\n\npublic:\n    MinStack() {\n    }\n\n    void push(int val) {\n        st.push(val);\n\n        // Store minimum value at this level\n        if (minSt.empty()) {\n            minSt.push(val);\n        }\n        else {\n            minSt.push(min(val, minSt.top()));\n        }\n    }\n\n    void pop() {\n        st.pop();\n        minSt.pop();\n    }\n\n    int top() {\n        return st.top();\n    }\n\n    int getMin() {\n        return minSt.top();\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "OperationTime`push``O(1)``pop``O(1)``top``O(1)``getMin``O(1)`\n\n- **Space:** `O(n)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "```\nNormal Stack\n     +\nMinimum Stack\n     ?  \ngetMin() = minStack.top()\n```\n\n**Remember:** Store the minimum corresponding to **every stack level**.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\npush(5)\n```\n\n```\nst     = [5]\nminSt  = [5]\n```\n\n```\npush(2)\n```\n\n```\nst     = [5,2]\nminSt  = [5,2]\n```\n\n```\npush(7)\n```\n\n```\nst     = [5,2,7]\nminSt  = [5,2,2]\n```\n\nTherefore:\n\n```\ngetMin() = 2\n```\n\nPop `7`:\n\n```\nst     = [5,2]\nminSt  = [5,2]\n```\n\nMinimum remains `2`.\n\n---"
      }
    ]
  },
  {
    "number": 42,
    "title": "Evaluate Reverse Polish Notation",
    "sections": [
      {
        "title": "Problem",
        "content": "Evaluate an arithmetic expression written in **Reverse Polish Notation (RPN)**.\n\nOperators:\n\n```\n+  -  *  /\n```\n\n**Example 1:**\n\n```\nInput:\n[\"2\",\"1\",\"+\",\"3\",\"*\"]\n\nOutput:\n9\n\n(2 + 1) * 3 = 9\n```\n\n**Example 2:**\n\n```\nInput:\n[\"4\",\"13\",\"5\",\"/\",\"+\"]\n\nOutput:\n6\n\n4 + (13 / 5) = 6\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use a stack.\n\n- Number ?   push.\n- Operator ?   pop two operands.\n- Perform operation:\n```\nsecondTop operator top\n```\n- Push result back.\n**Important for `-` and `/`:**\n\nIf:\n\n```\na = second popped\nb = first popped\n```\n\nthen:\n\n```\na - b\na / b\n```\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Create stack.\n2. Traverse tokens.\n3. If token is a number ?   push.\n4. If token is operator:\n- `b = pop()`\n- `a = pop()`\n- calculate `a op b`\n- push result.\n5. Final stack top is the answer.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int evalRPN(vector<string>& tokens) {\n        stack<int> st;\n\n        for (string& token : tokens) {\n\n            // Number\n            if (token != \"+\" &&\n                token != \"-\" &&\n                token != \"*\" &&\n                token != \"/\") {\n\n                st.push(stoi(token));\n            }\n            else {\n                // First popped = right operand\n                int b = st.top();\n                st.pop();\n\n                // Second popped = left operand\n                int a = st.top();\n                st.pop();\n\n                int result;\n\n                if (token == \"+\")\n                    result = a + b;\n                else if (token == \"-\")\n                    result = a - b;\n                else if (token == \"*\")\n                    result = a * b;\n                else\n                    result = a / b;\n\n                st.push(result);\n            }\n        }\n\n        return st.top();\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(n)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "```\nNumber ?   PUSH\n\nOperator:\n    b = pop\n    a = pop\n    result = a operator b\n    PUSH result\n```\n\n**Never reverse `a` and `b` for `-` and `/`.**\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\n[\"2\",\"1\",\"+\",\"3\",\"*\"]\n```\n\n```\n2 ?   [2]\n1 ?   [2,1]\n\n+:\n1 = b\n2 = a\n\n2 + 1 = 3\n\nstack ?   [3]\n\n3 ?   [3,3]\n\n*:\n3 ?  3 = 9\n\nstack ?   [9]\n```\n\nAnswer:\n\n```\n9\n```\n\n---\n\n# Pattern: Monotonic Stack"
      }
    ]
  },
  {
    "number": 43,
    "title": "Daily Temperatures",
    "sections": [
      {
        "title": "Problem",
        "content": "Given daily temperatures, return for each day how many days you must wait until a warmer temperature.\n\nIf no warmer day exists, return `0`.\n\n**Example 1:**\n\n```\nInput:\n[73,74,75,71,69,72,76,73]\n\nOutput:\n[1,1,4,2,1,1,0,0]\n```\n\n**Example 2:**\n\n```\nInput:\n[30,40,50,60]\n\nOutput:\n[1,1,1,0]\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use a **monotonic decreasing stack of indices**.\n\nThe stack contains days whose warmer temperature has not been found yet.\n\nWhen current temperature is greater than the temperature at stack top:\n\n```\ncurrent day = warmer day\n```\n\nResolve the previous day.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Create stack storing indices.\n2. Traverse temperatures from left to right.\n3. While stack isn't empty and:\n```\ntemp[i] > temp[stack.top()]\n```\n\n- Pop previous index.\n- Answer = `i - previousIndex`.\n4. Push current index.\n5. Remaining indices have no warmer day ?   remain `0`.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<int> dailyTemperatures(vector<int>& temperatures) {\n        int n = temperatures.size();\n\n        vector<int> ans(n, 0);\n\n        // Monotonic decreasing stack of indices\n        stack<int> st;\n\n        for (int i = 0; i < n; i++) {\n\n            // Current temperature is warmer\n            while (!st.empty() &&\n                   temperatures[i] > temperatures[st.top()]) {\n\n                int previousDay = st.top();\n                st.pop();\n\n                ans[previousDay] = i - previousDay;\n            }\n\n            st.push(i);\n        }\n\n        return ans;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(n)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "```\nStack = unresolved days\n\nCurrent > stack top\n       ?  \nWarmer day found\n       ?  \npop + calculate distance\n```\n\n**Store indices, not temperatures.**\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\n[73,74,75,71,69,72,76,73]\n```\n\n`73` ?   stack `[0]`\n\n`74` > `73`:\n\n```\npop 0\nans[0] = 1\n```\n\n`75` > `74`:\n\n```\npop 1\nans[1] = 1\n```\n\n`71` ?   push.\n\n`69` ?   push.\n\n`72` > `69`:\n\n```\nans[4] = 1\n```\n\n`72` > `71`:\n\n```\nans[3] = 2\n```\n\nContinue.\n\nFinal:\n\n```\n[1,1,4,2,1,1,0,0]\n```\n\n---"
      }
    ]
  },
  {
    "number": 44,
    "title": "Next Greater Element I",
    "sections": [
      {
        "title": "Problem",
        "content": "For each element in `nums1`, find the first greater element to its right in `nums2`.\n\n**Example 1:**\n\n```\nnums1 = [4,1,2]\nnums2 = [1,3,4,2]\n\nOutput = [-1,3,-1]\n```\n\n**Example 2:**\n\n```\nnums1 = [2,4]\nnums2 = [1,2,3,4]\n\nOutput = [3,-1]\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use a **monotonic decreasing stack** while traversing `nums2`.\n\nWhenever the current element is greater than the stack top:\n\n```\ncurrent = next greater element\n```\n\nStore the answer in a hashmap.\n\nThen look up each element from `nums1`.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Create stack and hashmap.\n2. Traverse `nums2`.\n3. While stack isn't empty and `current > stack.top()`:\n- `current` is the next greater element.\n- Store it.\n- Pop.\n4. Push current element.\n5. Remaining elements get `-1`.\n6. Build answer for `nums1` using hashmap.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<int> nextGreaterElement(vector<int>& nums1,\n                                   vector<int>& nums2) {\n\n        unordered_map<int, int> nextGreater;\n        stack<int> st;\n\n        for (int num : nums2) {\n\n            // Current number is the next greater\n            // element for smaller stack elements\n            while (!st.empty() && num > st.top()) {\n                nextGreater[st.top()] = num;\n                st.pop();\n            }\n\n            st.push(num);\n        }\n\n        // Remaining elements have no greater element\n        while (!st.empty()) {\n            nextGreater[st.top()] = -1;\n            st.pop();\n        }\n\n        vector<int> ans;\n\n        for (int num : nums1) {\n            ans.push_back(nextGreater[num]);\n        }\n\n        return ans;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n + m)`\n- **Space:** `O(n)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "```\nnums2\n  ?  \nMonotonic Stack\n  ?  \nNext Greater Map\n  ?  \nLookup nums1\n```\n\n**Pattern:**\nCurrent value resolves all smaller unresolved values on stack.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums2 = [1,3,4,2]\n```\n\n`1` ?   push\n\n```\n[1]\n```\n\n`3 > 1`:\n\n```\nnextGreater[1] = 3\n```\n\nPush `3`.\n\n`4 > 3`:\n\n```\nnextGreater[3] = 4\n```\n\nPush `4`.\n\n`2 < 4` ?   push.\n\nRemaining:\n\n```\n4 ?   -1\n2 ?   -1\n```\n\nFor:\n\n```\nnums1 = [4,1,2]\n```\n\nAnswer:\n\n```\n[-1,3,-1]\n```\n\n---"
      }
    ]
  },
  {
    "number": 45,
    "title": "Next Greater Element II",
    "sections": [
      {
        "title": "Problem",
        "content": "Given a **circular array**, find the next greater element for every element.\n\nAfter the last element, search continues from the beginning.\n\n**Example 1:**\n\n```\nInput:\n[1,2,1]\n\nOutput:\n[2,-1,2]\n```\n\n**Example 2:**\n\n```\nInput:\n[1,2,3,4,3]\n\nOutput:\n[2,3,4,-1,4]\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Same monotonic stack idea as Next Greater Element I, but because the array is circular, traverse it **twice**.\n\nUse:\n\n```\ni % n\n```\n\nto wrap around.\n\nStack stores indices.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Create answer initialized with `-1`.\n2. Traverse `2*n` positions.\n3. Actual index:\n```\nindex = i % n\n```\n4. While current value is greater than stack top:\n- Resolve answer for stack top.\n5. Push index only during the first traversal (`i < n`).\n6. Return answer.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<int> nextGreaterElements(vector<int>& nums) {\n        int n = nums.size();\n\n        vector<int> ans(n, -1);\n        stack<int> st;\n\n        // Traverse twice to simulate circular array\n        for (int i = 0; i < 2 * n; i++) {\n\n            int index = i % n;\n\n            while (!st.empty() &&\n                   nums[index] > nums[st.top()]) {\n\n                ans[st.top()] = nums[index];\n                st.pop();\n            }\n\n            // Push each original index only once\n            if (i < n) {\n                st.push(index);\n            }\n        }\n\n        return ans;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(n)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "**Circular array ?   traverse twice**\n\n```\nindex = i % n\n```\n\nMain trick:\n\n```\nfor (i = 0; i < 2*n; i++)\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [1,2,1]\n```\n\nFirst traversal resolves:\n\n```\n1 ?   2\n```\n\nFor last `1`, no greater element yet.\n\nSecond traversal allows wrapping:\n\n```\nlast 1 ?   first 1 ?   second 2\n```\n\nTherefore:\n\n```\n[2,-1,2]\n```\n\n---"
      }
    ]
  },
  {
    "number": 46,
    "title": "Largest Rectangle in Histogram",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an array of bar heights where each bar has width `1`, find the largest rectangle area.\n\n**Example 1:**\n\n```\nInput:\n[2,1,5,6,2,3]\n\nOutput:\n10\n```\n\nRectangle:\n\n```\nheight = 5\nwidth = 2\n\narea = 5 ?  2 = 10\n```\n\n**Example 2:**\n\n```\nInput:\n[2,4]\n\nOutput:\n4\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use a **monotonic increasing stack of indices**.\n\nFor every bar, we need to know:\n\n```\nHow far can this height extend?\n```\n\nWhen a smaller height appears, the taller bar at stack top can no longer extend further right.\n\nCalculate:\n\n```\nheight × width\n```\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Create increasing stack.\n2. Traverse bars.\n3. While current height is smaller than stack top:\n- Pop index.\n- Calculate height.\n- Determine left boundary from new stack top.\n- Calculate width.\n4. Push current index.\n5. Add a virtual height `0` at the end to process remaining bars.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int largestRectangleArea(vector<int>& heights) {\n        stack<int> st;\n        int maxArea = 0;\n\n        // Add virtual 0-height bar at the end\n        // to process all remaining bars\n        for (int i = 0; i <= heights.size(); i++) {\n\n            int currentHeight =\n                (i == heights.size()) ? 0 : heights[i];\n\n            while (!st.empty() &&\n                   currentHeight < heights[st.top()]) {\n\n                int height = heights[st.top()];\n                st.pop();\n\n                // If stack is empty, rectangle extends\n                // from index 0 to i-1\n                int leftBoundary =\n                    st.empty() ? -1 : st.top();\n\n                int width = i - leftBoundary - 1;\n\n                maxArea = max(maxArea, height * width);\n            }\n\n            st.push(i);\n        }\n\n        return maxArea;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(n)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "**Largest Rectangle ?   Increasing Monotonic Stack**\n\nWhen a smaller bar arrives:\n\n```\n       smaller\n          ?  \n   previous taller\n          ?  \n      calculate\n```\n\nFormula:\n\n```\nArea = height ?  width\n```\n\nWidth:\n\n```\ni - leftBoundary - 1\n```\n\n**Critical trick:** Add a virtual `0` at the end.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nheights = [2,1,5,6,2,3]\n```\n\nWhen `2` arrives after `6`:\n\n```\n6 cannot extend further\n```\n\nArea:\n\n```\n6 ?  1 = 6\n```\n\nThen `5` also gets popped:\n\n```\n5 ?  2 = 10\n```\n\nMaximum becomes:\n\n```\n10\n```\n\nFinal answer:\n\n```\n10\n```\n\n---"
      }
    ]
  },
  {
    "number": 47,
    "title": "Online Stock Span",
    "sections": [
      {
        "title": "Problem",
        "content": "Design a stock price system that returns the **span** of today's stock price.\n\nThe span is the number of consecutive days ending today where the stock price was **less than or equal to today's price**.\n\n**Example 1:**\n\n```\nPrices:\n100 ?   1\n80  ?   1\n60  ?   1\n70  ?   2\n60  ?   1\n75  ?   4\n85  ?   6\n```\n\n**Example 2:**\n\n```\n100 ?   1\n110 ?   2\n120 ?   3\n90  ?   1\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use a **monotonic decreasing stack**.\n\nStore:\n\n```\n(price, span)\n```\n\nWhen today's price is greater than or equal to the stack top:\n\n- Pop it.\n- Add its span to today's span.\nThis efficiently skips multiple previous days at once.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "For each `next(price)`:\n\n1. Set `span = 1`.\n2. While stack isn't empty and:\n```\nstack.top.price <= price\n```\n\n- Add stack top's span.\n- Pop it.\n3. Push `{price, span}`.\n4. Return `span`.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass StockSpanner {\nprivate:\n    // {price, span}\n    stack<pair<int, int>> st;\n\npublic:\n    StockSpanner() {\n    }\n\n    int next(int price) {\n        int span = 1;\n\n        // Merge all previous prices that are\n        // less than or equal to today's price\n        while (!st.empty() &&\n               st.top().first <= price) {\n\n            span += st.top().second;\n            st.pop();\n        }\n\n        st.push({price, span});\n\n        return span;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Amortized Time:** `O(1)` per `next()`\n- **Total Time:** `O(n)` for `n` calls\n- **Space:** `O(n)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "Store:\n\n```\n(price, span)\n```\n\nWhen:\n\n```\ncurrentPrice >= stack.top.price\n```\n\nthen:\n\n```\nspan += stack.top.span\npop\n```\n\n**Key idea:** One stored span represents many previous days.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "Prices:\n\n```\n100, 80, 60, 70\n```\n\n`100`:\n\n```\nspan = 1\nstack = [(100,1)]\n```\n\n`80`:\n\n```\n80 < 100\nspan = 1\nstack = [(100,1),(80,1)]\n```\n\n`60`:\n\n```\n60 < 80\nspan = 1\n```\n\n`70`:\n\n```\n70 >= 60\n?   span += 1\n\n70 < 80\n?   stop\n\nspan = 2\n```\n\nSo:\n\n```\n70 ?   2\n```\n\n---"
      }
    ]
  },
  {
    "number": 48,
    "title": "Asteroid Collision",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an array of asteroids:\n\n- Positive ?   moving right\n- Negative ?   moving left\nWhen two asteroids collide:\n\n- Smaller one explodes.\n- Same size ?   both explode.\n- Larger one survives.\nReturn the state after all collisions.\n\n**Example 1:**\n\n```\nInput:\n[5,10,-5]\n\nOutput:\n[5,10]\n```\n\n`10` destroys `-5`.\n\n**Example 2:**\n\n```\nInput:\n[8,-8]\n\nOutput:\n[]\n```\n\nBoth have equal size ?   both explode.\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use a stack representing asteroids that have survived so far.\n\nA collision can happen only when:\n\n```\nstack.top() > 0\ncurrent < 0\n```\n\nbecause:\n\n```\npositive ?   moving right\nnegative ?   moving left\n```\n\nThen compare their absolute sizes.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "For every asteroid:\n\n1. Assume it survives.\n2. While collision is possible:\n```\nstack not empty\nstack.top() > 0\nasteroid < 0\n```\n3. Compare:\n- `stack.top() < abs(asteroid)` ?   pop stack.\n- Equal ?   pop stack and destroy current.\n- Stack top larger ?   destroy current.\n4. If current survives ?   push it.\n5. Return stack contents.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<int> asteroidCollision(vector<int>& asteroids) {\n        vector<int> st;\n\n        for (int asteroid : asteroids) {\n\n            bool destroyed = false;\n\n            // Collision is possible only when:\n            // previous asteroid moves right\n            // current asteroid moves left\n            while (!st.empty() &&\n                   st.back() > 0 &&\n                   asteroid < 0) {\n\n                if (st.back() < -asteroid) {\n                    // Previous asteroid is smaller\n                    st.pop_back();\n                }\n                else if (st.back() == -asteroid) {\n                    // Both explode\n                    st.pop_back();\n                    destroyed = true;\n                    break;\n                }\n                else {\n                    // Current asteroid is smaller\n                    destroyed = true;\n                    break;\n                }\n            }\n\n            if (!destroyed) {\n                st.push_back(asteroid);\n            }\n        }\n\n        return st;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(n)`\nEach asteroid can be pushed and popped at most once.\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "Collision condition:\n\n```\npositive + negative\n     ?  \n  COLLISION\n```\n\nCompare:\n\n```\nstack.top() vs abs(current)\n```\n\n```\nstack smaller ?   pop stack\nequal         ?   both destroyed\nstack larger  ?   current destroyed\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nasteroids = [5,10,-5]\n```\n\n`5`:\n\n```\nstack = [5]\n```\n\n`10`:\n\n```\n10 moves right\nstack = [5,10]\n```\n\n`-5`:\n\n```\n10 ?   right\n-5 ?   left\n\nCollision!\n```\n\nCompare:\n\n```\n10 > 5\n```\n\nSo `-5` is destroyed.\n\nFinal:\n\n```\n[5,10]\n```\n\n---\n\n# ?x ? Stack & Monotonic Stack Revision Cheat Sheet\n#ProblemCore Pattern**40**Valid ParenthesesStack + matching brackets**41**Min StackTwo stacks**42**Evaluate RPNStack + operands**43**Daily TemperaturesMonotonic decreasing stack**44**Next Greater Element IMonotonic decreasing stack + map**45**Next Greater Element IIMonotonic stack + circular traversal**46**Largest RectangleMonotonic increasing stack**47**Online Stock SpanMonotonic decreasing stack + spans**48**Asteroid CollisionStack + collision simulation\n\n### ?x? Monotonic Stack Core Rules\n\n```\nNEXT GREATER\n? ? ? ? ? ? ? ? ? ? ? ? ?\nCurrent > Stack Top\n       ?  \nPop Stack Top\n       ?  \nCurrent is its answer\n```\n\n```\nNEXT SMALLER\n? ? ? ? ? ? ? ? ? ? ? ? ?\nCurrent < Stack Top\n       ?  \nPop Stack Top\n       ?  \nCurrent is its answer\n```\n\n```\nLARGEST RECTANGLE\n? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?\nIncreasing Stack\n       ?  \nSmaller bar arrives\n       ?  \nPop + Calculate Area\n```\n\n```\nCOLLISION\n? ? ? ? ? ? ? ? ? ?\nPositive + Negative\n       ?  \nCompare absolute values\n       ?  \nSmaller explodes\n```\n\n**Most important interview pattern:**  \n\n> When the current element resolves previous unresolved elements, think **Monotonic Stack**."
      }
    ]
  },
  {
    "number": 49,
    "title": "Binary Search",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nGiven a **sorted array** `nums` and a target value, return the index of `target`. If it does not exist, return `-1`.\n\n### Example 1\n\n```\nInput:  nums = [-1,0,3,5,9,12], target = 9\nOutput: 4\n```\n\n### Example 2\n\n```\nInput:  nums = [-1,0,3,5,9,12], target = 2\nOutput: -1\n```\n\n**Important constraint/assumption:** `nums` is sorted in ascending order.\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use **Binary Search**.\n\nInstead of checking every element:\n\n- Find the middle element.\n- If `nums[mid] == target`, return `mid`.\n- If `nums[mid] < target`, search the right half.\n- Otherwise, search the left half.\nEach step eliminates half of the search space.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Set `low = 0`, `high = n - 1`.\n2. While `low <= high`:\n- Calculate `mid`.\n- If `nums[mid] == target`, return `mid`.\n- If `nums[mid] < target`, move `low = mid + 1`.\n- Otherwise, move `high = mid - 1`.\n3. If the loop ends, return `-1`.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        int low = 0;\n        int high = nums.size() - 1;\n\n        while (low <= high) {\n            // Avoid potential overflow\n            int mid = low + (high - low) / 2;\n\n            if (nums[mid] == target) {\n                return mid;\n            }\n            else if (nums[mid] < target) {\n                // Target must be on the right\n                low = mid + 1;\n            }\n            else {\n                // Target must be on the left\n                high = mid - 1;\n            }\n        }\n\n        return -1;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(log n)`\n- **Space:** `O(1)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Sorted array + exact target ?   Binary Search.**\nRemember:\n\n```\nmid == target ?   answer\nmid < target  ?   right\nmid > target  ?   left\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [1,3,5,7,9]\ntarget = 7\n\nlow = 0, high = 4\nmid = 2 ?   nums[2] = 5\n\n5 < 7 ?   search right\n\nlow = 3, high = 4\nmid = 3 ?   nums[3] = 7\n\nFound ?   return 3\n```\n\n---"
      }
    ]
  },
  {
    "number": 50,
    "title": "Search Insert Position",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nGiven a sorted array of distinct integers and a target, return the index if the target exists. Otherwise, return the index where it should be inserted to maintain sorted order.\n\n### Example 1\n\n```\nInput:  nums = [1,3,5,6], target = 5\nOutput: 2\n```\n\n### Example 2\n\n```\nInput:  nums = [1,3,5,6], target = 2\nOutput: 1\n```\n\n**Important constraint:** `nums` is sorted and contains distinct values.\n\n---"
      },
      {
        "title": "Approach",
        "content": "This is essentially **Lower Bound**.\n\nWe need the first position where:\n\n```\nnums[index] >= target\n```\n\nBinary search can find this position in `O(log n)`.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Set `low = 0`, `high = n - 1`.\n2. While `low <= high`:\n- Calculate `mid`.\n- If `nums[mid] >= target`, the answer may be `mid`, so move left.\n- Otherwise, move right.\n3. When the loop finishes, `low` is the insertion position.\n4. Return `low`.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int searchInsert(vector<int>& nums, int target) {\n        int low = 0;\n        int high = nums.size() - 1;\n\n        while (low <= high) {\n            int mid = low + (high - low) / 2;\n\n            if (nums[mid] >= target) {\n                // mid could be the answer\n                high = mid - 1;\n            }\n            else {\n                // Need a larger value\n                low = mid + 1;\n            }\n        }\n\n        // low is the first index where nums[low] >= target\n        return low;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(log n)`\n- **Space:** `O(1)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Search Insert Position = Lower Bound.**\nFind:\n\n```\nfirst index where nums[i] >= target\n```\n\nAt the end:\n\n```\nlow = answer\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [1,3,5,6]\ntarget = 2\n\nlow = 0, high = 3\nmid = 1 ?   nums[1] = 3\n\n3 >= 2\n?   move left\nhigh = 0\n\nmid = 0 ?   nums[0] = 1\n\n1 < 2\n?   move right\nlow = 1\n\nLoop ends.\n\nAnswer = 1\n```\n\n---"
      }
    ]
  },
  {
    "number": 51,
    "title": "Find First and Last Position of Element in Sorted Array",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nGiven a sorted array, find the **first and last position** of a target value. If it does not exist, return `[-1,-1]`.\n\n### Example 1\n\n```\nInput:  nums = [5,7,7,8,8,10], target = 8\nOutput: [3,4]\n```\n\n### Example 2\n\n```\nInput:  nums = [5,7,7,8,8,10], target = 6\nOutput: [-1,-1]\n```\n\n**Important constraint:** The array is sorted in non-decreasing order.\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use **two binary searches**:\n\n1. Find the **first occurrence**.\n2. Find the **last occurrence**.\nFor first occurrence:\n\n```\nFind first index where nums[i] >= target\n```\n\nFor last occurrence:\n\n```\nFind first index where nums[i] > target\nthen subtract 1\n```\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "### First Position\n\n- If `nums[mid] >= target`, move left.\n- Otherwise move right.\n\n### Last Position\n\n- If `nums[mid] <= target`, move right.\n- Otherwise move left.\nFinally verify that the positions actually contain the target.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int firstPosition(vector<int>& nums, int target) {\n        int low = 0;\n        int high = nums.size() - 1;\n        int ans = -1;\n\n        while (low <= high) {\n            int mid = low + (high - low) / 2;\n\n            if (nums[mid] >= target) {\n                if (nums[mid] == target)\n                    ans = mid;\n\n                // Continue searching towards the left\n                high = mid - 1;\n            }\n            else {\n                low = mid + 1;\n            }\n        }\n\n        return ans;\n    }\n\n    int lastPosition(vector<int>& nums, int target) {\n        int low = 0;\n        int high = nums.size() - 1;\n        int ans = -1;\n\n        while (low <= high) {\n            int mid = low + (high - low) / 2;\n\n            if (nums[mid] <= target) {\n                if (nums[mid] == target)\n                    ans = mid;\n\n                // Continue searching towards the right\n                low = mid + 1;\n            }\n            else {\n                high = mid - 1;\n            }\n        }\n\n        return ans;\n    }\n\n    vector<int> searchRange(vector<int>& nums, int target) {\n        return {\n            firstPosition(nums, target),\n            lastPosition(nums, target)\n        };\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(log n)`\n- **Space:** `O(1)` excluding the returned vector.\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **First + Last = two binary searches.**\n\n```\nFirst ?   keep moving LEFT\nLast  ?   keep moving RIGHT\n```\n\nPattern:\n\n```\nFirst = lower_bound(target)\nLast  = upper_bound(target) - 1\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [5,7,7,8,8,10]\ntarget = 8\n\nFirst occurrence:\nmid ?   8\nFound, but continue LEFT\n?   index 3\n\nLast occurrence:\nmid ?   8\nFound, but continue RIGHT\n?   index 4\n\nAnswer = [3,4]\n```\n\n---"
      }
    ]
  },
  {
    "number": 52,
    "title": "Search a 2D Matrix",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nGiven a matrix where:\n\n- Each row is sorted.\n- The first element of every row is greater than the last element of the previous row.\nDetermine whether a target exists.\n\n### Example 1\n\n```\nInput:\n[\n [1, 3, 5, 7],\n [10,11,16,20],\n [23,30,34,60]\n]\ntarget = 3\n\nOutput: true\n```\n\n### Example 2\n\n```\nInput:\n[\n [1, 3, 5, 7],\n [10,11,16,20],\n [23,30,34,60]\n]\ntarget = 13\n\nOutput: false\n```\n\n**Important constraint:** The matrix behaves like one globally sorted 1D array.\n\n---"
      },
      {
        "title": "Approach",
        "content": "Treat the entire matrix as a **virtual 1D sorted array**.\n\nFor:\n\n```\nrows = m\ncolumns = n\n```\n\nVirtual index:\n\n```\nrow = mid / n\ncol = mid % n\n```\n\nThen perform normal binary search.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Calculate total elements: `m * n`.\n2. Set:\n```\nlow = 0\nhigh = m*n - 1\n```\n3. Find `mid`.\n4. Convert `mid` to matrix coordinates:\n```\nrow = mid / n\ncol = mid % n\n```\n5. Compare `matrix[row][col]` with target.\n6. Continue binary search.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        int rows = matrix.size();\n        int cols = matrix[0].size();\n\n        int low = 0;\n        int high = rows * cols - 1;\n\n        while (low <= high) {\n            int mid = low + (high - low) / 2;\n\n            // Convert virtual 1D index into 2D coordinates\n            int row = mid / cols;\n            int col = mid % cols;\n\n            if (matrix[row][col] == target) {\n                return true;\n            }\n            else if (matrix[row][col] < target) {\n                low = mid + 1;\n            }\n            else {\n                high = mid - 1;\n            }\n        }\n\n        return false;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(log(m ?  n))`\n- **Space:** `O(1)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Flatten the matrix mentally.**\nRemember:\n\n```\nrow = mid / cols\ncol = mid % cols\n```\n\nThis converts a 2D binary search problem into normal binary search.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "For:\n\n```\n[\n [1,3,5,7],\n [10,11,16,20],\n [23,30,34,60]\n]\n```\n\nTarget = `16`\n\nThere are `12` elements.\n\n```\nlow = 0\nhigh = 11\n\nmid = 5\n\nrow = 5 / 4 = 1\ncol = 5 % 4 = 1\n\nmatrix[1][1] = 11\n```\n\n`11 < 16`, so search right.\n\nEventually:\n\n```\nmid = 6\nrow = 1\ncol = 2\n\nmatrix[1][2] = 16\n\nFound.\n```\n\n---"
      }
    ]
  },
  {
    "number": 53,
    "title": "Search in Rotated Sorted Array",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nGiven a sorted array rotated at an unknown pivot, search for a target and return its index. Return `-1` if not found.\n\n### Example 1\n\n```\nInput:  nums = [4,5,6,7,0,1,2], target = 0\nOutput: 4\n```\n\n### Example 2\n\n```\nInput:  nums = [4,5,6,7,0,1,2], target = 3\nOutput: -1\n```\n\n**Important constraint:** Values are distinct.\n\n---"
      },
      {
        "title": "Approach",
        "content": "Even after rotation, **at least one half is always sorted**.\n\nFor every `mid`:\n\n- Check whether left half is sorted.\n- If target lies inside that sorted half, search there.\n- Otherwise search the other half.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Set `low` and `high`.\n2. Calculate `mid`.\n3. If `nums[mid] == target`, return `mid`.\n4. If left half is sorted:\n```\nnums[low] <= nums[mid]\n```\n5. Check whether target lies in the left sorted range.\n6. Otherwise search right.\n7. If right half is sorted, perform the symmetric check.\n8. Continue until found or search space becomes empty.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        int low = 0;\n        int high = nums.size() - 1;\n\n        while (low <= high) {\n            int mid = low + (high - low) / 2;\n\n            if (nums[mid] == target) {\n                return mid;\n            }\n\n            // Check if the left half is sorted\n            if (nums[low] <= nums[mid]) {\n\n                // Is target inside the sorted left half?\n                if (nums[low] <= target && target < nums[mid]) {\n                    high = mid - 1;\n                }\n                else {\n                    low = mid + 1;\n                }\n            }\n            else {\n                // Right half must be sorted\n\n                // Is target inside the sorted right half?\n                if (nums[mid] < target && target <= nums[high]) {\n                    low = mid + 1;\n                }\n                else {\n                    high = mid - 1;\n                }\n            }\n        }\n\n        return -1;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(log n)`\n- **Space:** `O(1)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Rotated array → identify the sorted half.**\nPattern:\n\n```\nLeft sorted?\n    ↓\nTarget inside left range?\n    ↓\nYes → left\nNo  → right\n```\n\nIf left isn't sorted, right must be sorted.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [4,5,6,7,0,1,2]\ntarget = 0\n\nlow = 0, high = 6\nmid = 3 ?   7\n\nLeft side [4,5,6,7] is sorted.\n\n0 is NOT between 4 and 7.\nTherefore search right.\n\nlow = 4, high = 6\nmid = 5 ?   1\n\nRight side [1,2] is sorted.\n\n0 is not there.\nSearch left.\n\nlow = 4, high = 4\nmid = 4 ?   0\n\nFound ?   4\n```\n\n---"
      }
    ]
  },
  {
    "number": 54,
    "title": "Find Minimum in Rotated Sorted Array",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nGiven a sorted array rotated at some pivot, find its minimum element.\n\n### Example 1\n\n```\nInput:  nums = [3,4,5,1,2]\nOutput: 1\n```\n\n### Example 2\n\n```\nInput:  nums = [4,5,6,7,0,1,2]\nOutput: 0\n```\n\n**Important constraint:** All elements are unique.\n\n---"
      },
      {
        "title": "Approach",
        "content": "Compare `nums[mid]` with `nums[high]`.\n\n### If:\n\n```\nnums[mid] > nums[high]\n```\n\nThe minimum must be on the **right**.\n\n### Otherwise:\n\n```\nnums[mid] <= nums[high]\n```\n\nThe minimum could be `mid` or somewhere on the **left**.\n\nTherefore:\n\n```\nlow = mid + 1\n```\n\nor\n\n```\nhigh = mid\n```\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Set `low = 0`, `high = n-1`.\n2. While `low < high`:\n- Calculate `mid`.\n- If `nums[mid] > nums[high]`:\n- Minimum is right of `mid`.\n- `low = mid + 1`.\n- Else:\n- Minimum is at `mid` or left.\n- `high = mid`.\n3. Return `nums[low]`.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int findMin(vector<int>& nums) {\n        int low = 0;\n        int high = nums.size() - 1;\n\n        while (low < high) {\n            int mid = low + (high - low) / 2;\n\n            if (nums[mid] > nums[high]) {\n                // Minimum is definitely on the right\n                low = mid + 1;\n            }\n            else {\n                // mid could itself be the minimum\n                high = mid;\n            }\n        }\n\n        return nums[low];\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(log n)`\n- **Space:** `O(1)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Find minimum in rotated array ?   compare `mid` with `high`.**\n\n```\nnums[mid] > nums[high]\n?   go RIGHT\n\nnums[mid] <= nums[high]\n?   go LEFT / keep mid\n```\n\nImportant:\n\n```\nhigh = mid\n```\n\nnot `mid - 1`, because `mid` may be the minimum.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [4,5,6,7,0,1,2]\n\nlow = 0, high = 6\nmid = 3 ?   7\n\n7 > 2\n?   minimum is right\nlow = 4\n\nmid = 5 ?   1\n\n1 < 2\n?   minimum can be mid or left\nhigh = 5\n\nmid = 4 ?   0\n\n0 < 1\nhigh = 4\n\nlow = high = 4\n\nAnswer = nums[4] = 0\n```\n\n---"
      }
    ]
  },
  {
    "number": 55,
    "title": "Koko Eating Bananas",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nKoko has `piles` of bananas and must finish all bananas within `h` hours.\n\nShe eats at a constant speed of `k` bananas per hour from one pile. Find the **minimum integer `k`** that allows her to finish within `h` hours.\n\n### Example 1\n\n```\nInput:  piles = [3,6,7,11], h = 8\nOutput: 4\n```\n\n### Example 2\n\n```\nInput:  piles = [30,11,23,4,20], h = 5\nOutput: 30\n```\n\n**Important constraints:**\n\n- `k` must be a positive integer.\n- Hours needed for a pile are `ceil(pile / k)`.\n- Search range is `[1, max(piles)]`.\n\n---"
      },
      {
        "title": "Approach",
        "content": "This is **Binary Search on Answer**.\n\nWe are not searching for an array index.\n\nWe are searching for the minimum valid eating speed.\n\nFor a speed `k`, calculate:\n\n```\nhours = Σ ceil(pile / k)\n```\n\nIf hours `<= h`, speed is valid.\n\nThen try a smaller speed.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Set:\n```\nlow = 1\nhigh = max(piles)\n```\n2. Calculate `mid`.\n3. Calculate total hours required at speed `mid`.\n4. If total hours `<= h`:\n- `mid` works.\n- Try smaller speed.\n- `high = mid - 1`\n5. Otherwise:\n- Speed is too slow.\n- `low = mid + 1`\n6. Return `low`.\nUse:\n\n```\n(pile + speed - 1) / speed\n```\n\nfor ceiling division.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int minEatingSpeed(vector<int>& piles, int h) {\n        int low = 1;\n        int high = *max_element(piles.begin(), piles.end());\n\n        while (low <= high) {\n            int speed = low + (high - low) / 2;\n\n            long long hours = 0;\n\n            for (int pile : piles) {\n                // Ceiling of pile / speed\n                hours += (pile + speed - 1) / speed;\n            }\n\n            if (hours <= h) {\n                // Speed works, try a smaller speed\n                high = speed - 1;\n            }\n            else {\n                // Speed is too slow\n                low = speed + 1;\n            }\n        }\n\n        return low;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "Let:\n\n- `n` = number of piles\n- `M` = maximum pile size\n- **Time:** `O(n log M)`\n- **Space:** `O(1)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Binary Search on Answer = search a range of possible answers.**\nFor Koko:\n\n```\nAnswer range = [1, max pile]\n```\n\nCondition:\n\n```\nhours <= h ?   VALID\nhours > h  ?   INVALID\n```\n\nWe need the **minimum valid speed**.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\npiles = [3,6,7,11]\nh = 8\n\nTry speed = 6\n\nhours:\n3 ?   1 hour\n6 ?   1 hour\n7 ?   2 hours\n11 ?   2 hours\n\nTotal = 6 hours\n\n6 <= 8 ?   valid\nTry smaller speed.\n\nEventually speed = 4:\n\n3 ?   1\n6 ?   2\n7 ?   2\n11 ?   3\n\nTotal = 8\n\nValid.\n\nAnswer = 4\n```\n\n---"
      }
    ]
  },
  {
    "number": 56,
    "title": "Capacity to Ship Packages Within D Days",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nGiven package weights in a fixed order, ship all packages within `days` days.\n\nEach day, packages must be shipped in order and the total weight cannot exceed the ship's capacity.\n\nFind the **minimum required capacity**.\n\n### Example 1\n\n```\nInput:  weights = [1,2,3,4,5,6,7,8,9,10], days = 5\nOutput: 15\n```\n\n### Example 2\n\n```\nInput:  weights = [3,2,2,4,1,4], days = 3\nOutput: 6\n```\n\n**Important constraints:**\n\n```\nMinimum capacity = max(weights)\nMaximum capacity = sum(weights)\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use **Binary Search on Answer**.\n\nFor a candidate capacity, simulate shipping:\n\n- Keep adding packages to the current day.\n- If the next package exceeds capacity, start a new day.\n- Count required days.\nIf required days `<= D`, capacity is sufficient.\n\nThen try a smaller capacity.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Set:\n```\nlow = max(weights)\nhigh = sum(weights)\n```\n2. Choose `capacity = mid`.\n3. Simulate how many days are required.\n4. If required days `<= days`:\n- Capacity works.\n- Try smaller capacity.\n5. Otherwise:\n- Capacity is too small.\n- Increase it.\n6. Return the minimum valid capacity.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    bool canShip(vector<int>& weights, int days, int capacity) {\n        int requiredDays = 1;\n        int currentWeight = 0;\n\n        for (int weight : weights) {\n            if (currentWeight + weight > capacity) {\n                // Start a new day\n                requiredDays++;\n                currentWeight = 0;\n            }\n\n            currentWeight += weight;\n        }\n\n        return requiredDays <= days;\n    }\n\n    int shipWithinDays(vector<int>& weights, int days) {\n        int low = *max_element(weights.begin(), weights.end());\n        int high = accumulate(weights.begin(), weights.end(), 0);\n\n        while (low <= high) {\n            int capacity = low + (high - low) / 2;\n\n            if (canShip(weights, days, capacity)) {\n                // Valid capacity, try smaller\n                high = capacity - 1;\n            }\n            else {\n                // Capacity is too small\n                low = capacity + 1;\n            }\n        }\n\n        return low;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "Let:\n\n- `n` = number of packages\n- `S` = total weight\n- **Time:** `O(n log S)`\n- **Space:** `O(1)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Minimum capacity problem ?   Binary Search on Answer.**\nSearch:\n\n```\n[max weight, total weight]\n```\n\nCondition:\n\n```\nrequired days <= D ?   valid\nrequired days > D  ?   invalid\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nweights = [1,2,3,4,5]\ndays = 3\n```\n\nSuppose capacity = `6`.\n\nDay 1:\n\n```\n1 + 2 + 3 = 6\n```\n\nDay 2:\n\n```\n4 + 2? \n```\n\nCannot take `5` after `4`, so:\n\n```\nDay 2 = 4\nDay 3 = 5\n```\n\nRequired days = `3`.\n\nTherefore capacity `6` is valid.\n\n---"
      }
    ]
  },
  {
    "number": 57,
    "title": "Split Array Largest Sum",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nGiven an array of non-negative integers, split it into exactly `k` non-empty contiguous subarrays.\n\nMinimize the **largest subarray sum**.\n\n### Example 1\n\n```\nInput:  nums = [7,2,5,10,8], k = 2\nOutput: 18\n```\n\nExplanation:\n\n```\n[7,2,5] = 14\n[10,8]  = 18\n\nLargest sum = 18\n```\n\n### Example 2\n\n```\nInput:  nums = [1,2,3,4,5], k = 2\nOutput: 9\n```\n\nPossible split:\n\n```\n[1,2,3] = 6\n[4,5]   = 9\n\nLargest = 9\n```\n\n**Important constraints:** Subarrays must be contiguous and non-empty.\n\n---"
      },
      {
        "title": "Approach",
        "content": "This is another **Binary Search on Answer** problem.\n\nThe answer must lie between:\n\n```\nmax(nums)\n```\n\nand\n\n```\nsum(nums)\n```\n\nFor a candidate maximum sum `X`, determine how many subarrays are needed if no subarray can have sum greater than `X`.\n\nIf required subarrays `<= k`, `X` is possible.\n\nTry a smaller `X`.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Set:\n```\nlow = max(nums)\nhigh = sum(nums)\n```\n2. Pick `mid`.\n3. Greedily create subarrays:\n- Keep adding elements.\n- If adding an element exceeds `mid`, start a new subarray.\n4. Count required subarrays.\n5. If required `<= k`:\n- `mid` is possible.\n- Search smaller.\n6. Otherwise:\n- `mid` is too small.\n- Search larger.\n7. Return `low`.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    bool canSplit(vector<int>& nums, int k, long long maxSum) {\n        int subarrays = 1;\n        long long currentSum = 0;\n\n        for (int num : nums) {\n            if (currentSum + num > maxSum) {\n                // Start a new subarray\n                subarrays++;\n                currentSum = 0;\n            }\n\n            currentSum += num;\n        }\n\n        return subarrays <= k;\n    }\n\n    int splitArray(vector<int>& nums, int k) {\n        long long low = *max_element(nums.begin(), nums.end());\n        long long high = accumulate(nums.begin(), nums.end(), 0LL);\n\n        while (low <= high) {\n            long long mid = low + (high - low) / 2;\n\n            if (canSplit(nums, k, mid)) {\n                // Possible, try a smaller maximum sum\n                high = mid - 1;\n            }\n            else {\n                // Need a larger maximum sum\n                low = mid + 1;\n            }\n        }\n\n        return (int)low;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "Let:\n\n- `n` = number of elements\n- `S` = total sum\n- **Time:** `O(n log S)`\n- **Space:** `O(1)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Split Array Largest Sum ?   minimize the maximum subarray sum.**\nSearch range:\n\n```\n[max element, total sum]\n```\n\nCondition:\n\n```\nrequired subarrays <= k ?   valid\nrequired subarrays > k  ?   invalid\n```\n\nThis is a classic **minimize the maximum** pattern.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [7,2,5,10,8]\nk = 2\n```\n\nTry maximum allowed sum = `18`.\n\nBuild greedily:\n\n```\n7 + 2 + 5 = 14\n10 would make 24 ?   start new subarray\n\n[7,2,5] = 14\n[10,8]   = 18\n```\n\nRequired subarrays = `2`.\n\nTherefore `18` is valid.\n\nBinary search checks whether something smaller can also work.\n\nThe minimum valid answer is:\n\n```\n18\n```\n\n---"
      }
    ]
  },
  {
    "number": 58,
    "title": "Magnetic Force Between Two Balls",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nGiven positions of baskets and `m` balls, place the balls in baskets so that the **minimum magnetic force between any two balls is maximized**.\n\nThe magnetic force between two balls is their distance.\n\n### Example 1\n\n```\nInput:  position = [1,2,3,4,7], m = 3\nOutput: 3\n```\n\nOne optimal placement:\n\n```\n1, 4, 7\n```\n\nDistances:\n\n```\n3, 3\n```\n\nMinimum distance = `3`.\n\n### Example 2\n\n```\nInput:  position = [5,4,3,2,1,1000000000], m = 2\nOutput: 999999999\n```\n\nPlace balls at:\n\n```\n1 and 1000000000\n```\n\nDistance = `999999999`.\n\n**Important constraint:** Basket positions are distinct. Sort them before processing.\n\n---"
      },
      {
        "title": "Approach",
        "content": "This is **Binary Search on Answer**.\n\nWe want to **maximize the minimum distance**.\n\nSort positions first.\n\nSuppose we test a minimum distance `d`.\n\nGreedily:\n\n- Place the first ball at the first basket.\n- Place the next ball at the earliest basket whose distance from the previous ball is at least `d`.\n- Count how many balls can be placed.\nIf we can place at least `m` balls:\n\n```\nd is possible\n```\n\nTry a larger distance.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Sort `position`.\n2. Search possible distance:\n```\nlow = 1\nhigh = maxPosition - minPosition\n```\n3. Calculate `mid`.\n4. Greedily place balls:\n- First ball at `position[0]`.\n- For every next basket:\n- If:\n```\nposition[i] - last >= mid\n```\n\nplace a ball.\n5. If at least `m` balls can be placed:\n- Distance is possible.\n- Try larger distance.\n6. Otherwise:\n- Distance is too large.\n- Try smaller distance.\n7. Return the largest valid distance.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    bool canPlace(vector<int>& position, int m, int minDistance) {\n        // Place the first ball at the first basket\n        int count = 1;\n        int lastPosition = position[0];\n\n        for (int i = 1; i < position.size(); i++) {\n            if (position[i] - lastPosition >= minDistance) {\n                // Place another ball here\n                count++;\n                lastPosition = position[i];\n\n                if (count >= m) {\n                    return true;\n                }\n            }\n        }\n\n        return false;\n    }\n\n    int maxDistance(vector<int>& position, int m) {\n        sort(position.begin(), position.end());\n\n        int low = 1;\n        int high = position.back() - position.front();\n\n        int answer = 0;\n\n        while (low <= high) {\n            int mid = low + (high - low) / 2;\n\n            if (canPlace(position, m, mid)) {\n                // Distance is possible, try larger\n                answer = mid;\n                low = mid + 1;\n            }\n            else {\n                // Distance is too large\n                high = mid - 1;\n            }\n        }\n\n        return answer;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "Let `n` = number of basket positions.\n\n- Sorting: `O(n log n)`\n- Binary search + greedy check: `O(n log(maxPosition - minPosition))`\n\n### Total Time\n\n```\nO(n log n + n log(maxPosition - minPosition))\n```\n\n### Space\n\n```\nO(1)\n```\n\nexcluding the sorting implementation's internal stack.\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Magnetic Force → maximize the minimum distance.**\nPattern:\n\n```\nSort\n ↓\nBinary Search on distance\n ↓\nGreedy placement\n```\n\nCondition:\n\n```\nCan place m balls with distance >= d?\n```\n\nIf yes:\n\n```\nincrease d\n```\n\nIf no:\n\n```\ndecrease d\n```\n\nThis is the opposite direction from Koko/Shipping/Split Array:\n\n```\nKoko        → minimize valid answer\nShipping    → minimize valid answer\nSplit Array → minimize valid answer\nMagnetic    → maximize valid answer\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nposition = [1,2,3,4,7]\nm = 3\n```\n\nAlready sorted.\n\nTry:\n\n```\nminimum distance = 3\n```\n\nPlace first ball:\n\n```\n1\n```\n\nNext valid basket:\n\n```\n4\n```\n\nNext valid basket:\n\n```\n7\n```\n\nWe placed:\n\n```\n1, 4, 7\n```\n\nDistances:\n\n```\n4 - 1 = 3\n7 - 4 = 3\n```\n\nSo `3` is possible.\n\nTry `4`:\n\n```\n1 → next possible 7\n```\n\nOnly 2 balls can be placed.\n\nTherefore `4` is impossible.\n\nFinal answer:\n\n```\n3\n```\n\n---\n\n# 🔥 Binary Search Pattern Revision\nQProblemPatternWhat Are We Searching?Valid Direction49Binary SearchClassicIndexExact target50Search Insert PositionLower BoundIndexFirst `>= target`51First & Last PositionLower/Upper BoundIndicesFirst/last occurrence52Search 2D MatrixClassicVirtual indexExact target53Search Rotated ArrayModified Binary SearchIndexSorted half54Find Minimum RotatedModified Binary SearchMinimumCompare `mid` with `high`55Koko Eating BananasBS on AnswerEating speed**Minimize**56Ship PackagesBS on AnswerCapacity**Minimize**57Split Array Largest SumBS on AnswerMaximum subarray sum**Minimize**58Magnetic ForceBS on AnswerMinimum distance**Maximize**\n\n### The most important interview pattern\n\n```\n                BINARY SEARCH\n                     │\n        ┌────────────┴────────────┐\n        │                         │\n   Search Space              Answer Space\n        │                         │\n   Find element              Find optimal value\n        │                         │\n   49, 50, 51, 52        55, 56, 57, 58\n                              │\n                       ┌──────┴──────┐\n                       │             │\n                    Minimize      Maximize\n                       │             │\n                  Koko/Ship/       Magnetic\n                  Split Array       Force\n```\n\n**Golden rule for Binary Search on Answer:**\n\n> Don't ask *“Where is the answer?”* — ask **“For this candidate answer, is it possible?”**\nThat single shift in thinking is what connects **55–58**."
      }
    ]
  },
  {
    "number": 59,
    "title": "Reverse Linked List",
    "sections": [
      {
        "title": "Problem",
        "content": "Reverse a singly linked list and return its new head.\n\n### Example 1\n\n```\nInput: 1 ?   2 ?   3 ?   4 ?   5\nOutput: 5 ?   4 ?   3 ?   2 ?   1\n```\n\n### Example 2\n\n```\nInput: 1 ?   2\nOutput: 2 ?   1\n```"
      },
      {
        "title": "Approach",
        "content": "Use three pointers:\n\n```\nprev\ncurr\nnext\n```\n\nReverse the `next` pointer of every node."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Set `prev = nullptr`.\n2. Set `curr = head`.\n3. Save `curr->next`.\n4. Reverse `curr->next`.\n5. Move `prev` and `curr`.\n6. Return `prev`."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    ListNode* reverseList(ListNode* head) {\n        ListNode* prev = nullptr;\n        ListNode* curr = head;\n\n        while (curr != nullptr) {\n            // Save next node before changing the link\n            ListNode* next = curr->next;\n\n            // Reverse the pointer\n            curr->next = prev;\n\n            // Move forward\n            prev = curr;\n            curr = next;\n        }\n\n        return prev;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Reverse LL = save next ?   reverse link ?   move pointers.**"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\n1 ?   2 ?   3 ?   NULL\n\nprev = NULL\ncurr = 1\n\n1 ?   NULL\nprev = 1\ncurr = 2\n\n2 ?   1\nprev = 2\ncurr = 3\n\n3 ?   2 ?   1\n```\n\nAnswer:\n\n```\n3 ?   2 ?   1\n```\n\n---"
      }
    ]
  },
  {
    "number": 60,
    "title": "Merge Two Sorted Lists",
    "sections": [
      {
        "title": "Problem",
        "content": "Merge two sorted linked lists into one sorted linked list.\n\n### Example 1\n\n```\nInput:\n1 ?   2 ?   4\n1 ?   3 ?   4\n\nOutput:\n1 ?   1 ?   2 ?   3 ?   4 ?   4\n```\n\n### Example 2\n\n```\nInput:\n[]\n0 ?   1\n\nOutput:\n0 ?   1\n```"
      },
      {
        "title": "Approach",
        "content": "Use a dummy node and compare the current nodes of both lists.\n\nAttach the smaller node to the result."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Create dummy node.\n2. Set `curr = dummy`.\n3. While both lists exist:\n- Choose smaller node.\n- Attach it.\n4. Attach remaining list.\n5. Return `dummy->next`."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {\n        ListNode dummy(0);\n        ListNode* curr = &dummy;\n\n        while (list1 != nullptr && list2 != nullptr) {\n            if (list1->val <= list2->val) {\n                curr->next = list1;\n                list1 = list1->next;\n            } else {\n                curr->next = list2;\n                list2 = list2->next;\n            }\n\n            curr = curr->next;\n        }\n\n        // Attach remaining nodes\n        curr->next = (list1 != nullptr) ? list1 : list2;\n\n        return dummy.next;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n + m)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Two sorted lists ?   two pointers + dummy node.**\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  },
  {
    "number": 61,
    "title": "Linked List Cycle",
    "sections": [
      {
        "title": "Problem",
        "content": "Determine whether a linked list contains a cycle.\n\n### Example 1\n\n```\n3 ?   2 ?   0 ?   -4\n    ?           |\n    ?  ? ? ? ? ? ? ? ? ? ? ?\n\nOutput: true\n```\n\n### Example 2\n\n```\n1 ?   2 ?   NULL\n\nOutput: false\n```"
      },
      {
        "title": "Approach",
        "content": "Use **Floyd's Cycle Detection Algorithm**.\n\nTwo pointers:\n\n- `slow` moves 1 step.\n- `fast` moves 2 steps.\nIf they meet, a cycle exists."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Set both pointers to `head`.\n2. Move `slow` by 1.\n3. Move `fast` by 2.\n4. If they meet ?   cycle exists.\n5. If `fast` reaches `nullptr` ?   no cycle."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    bool hasCycle(ListNode* head) {\n        ListNode* slow = head;\n        ListNode* fast = head;\n\n        while (fast != nullptr && fast->next != nullptr) {\n            slow = slow->next;\n            fast = fast->next->next;\n\n            // They meet only if a cycle exists\n            if (slow == fast)\n                return true;\n        }\n\n        return false;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Cycle detection = slow 1 step, fast 2 steps.**\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  },
  {
    "number": 62,
    "title": "Middle of the Linked List",
    "sections": [
      {
        "title": "Problem",
        "content": "Return the middle node of a linked list.\n\nIf there are two middle nodes, return the **second middle node**.\n\n### Example 1\n\n```\nInput: 1 ?   2 ?   3 ?   4 ?   5\nOutput: 3\n```\n\n### Example 2\n\n```\nInput: 1 ?   2 ?   3 ?   4\nOutput: 3\n```"
      },
      {
        "title": "Approach",
        "content": "Use slow and fast pointers.\n\n```\nslow ?   1 step\nfast ?   2 steps\n```\n\nWhen `fast` reaches the end, `slow` is at the middle."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Set `slow = head`, `fast = head`.\n2. Move slow one step.\n3. Move fast two steps.\n4. Continue while `fast` and `fast->next` exist.\n5. Return `slow`."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    ListNode* middleNode(ListNode* head) {\n        ListNode* slow = head;\n        ListNode* fast = head;\n\n        while (fast != nullptr && fast->next != nullptr) {\n            slow = slow->next;\n            fast = fast->next->next;\n        }\n\n        return slow;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Middle LL = slow/fast pointers.**\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  },
  {
    "number": 63,
    "title": "Remove Nth Node From End of List",
    "sections": [
      {
        "title": "Problem",
        "content": "Remove the `n`th node from the end of a linked list and return the head.\n\n### Example 1\n\n```\nInput: 1 ?   2 ?   3 ?   4 ?   5, n = 2\n\nOutput: 1 ?   2 ?   3 ?   5\n```\n\n### Example 2\n\n```\nInput: 1, n = 1\n\nOutput: []\n```"
      },
      {
        "title": "Approach",
        "content": "Use two pointers with a **dummy node**.\n\nKeep `fast` exactly `n` nodes ahead of `slow`.\n\nThen when `fast` reaches the end, `slow->next` is the node to remove."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Create dummy before head.\n2. Set `slow = fast = dummy`.\n3. Move `fast` `n` steps.\n4. Move both until `fast->next == nullptr`.\n5. Remove `slow->next`.\n6. Return `dummy->next`."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    ListNode* removeNthFromEnd(ListNode* head, int n) {\n        ListNode dummy(0);\n        dummy.next = head;\n\n        ListNode* slow = &dummy;\n        ListNode* fast = &dummy;\n\n        // Create a gap of n nodes\n        for (int i = 0; i < n; i++) {\n            fast = fast->next;\n        }\n\n        // Move together until fast reaches the last node\n        while (fast->next != nullptr) {\n            slow = slow->next;\n            fast = fast->next;\n        }\n\n        // Remove slow->next\n        slow->next = slow->next->next;\n\n        return dummy.next;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Nth from end = maintain an `n`-node gap.**\nDummy node handles deleting the head cleanly.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  },
  {
    "number": 64,
    "title": "Reorder List",
    "sections": [
      {
        "title": "Problem",
        "content": "Reorder:\n\n```\nL0 ?   L1 ?   L2 ?   ... ?   Ln\n```\n\ninto:\n\n```\nL0 ?   Ln ?   L1 ?   Ln-1 ?   L2 ?   ...\n```\n\n### Example 1\n\n```\nInput:\n1 ?   2 ?   3 ?   4\n\nOutput:\n1 ?   4 ?   2 ?   3\n```\n\n### Example 2\n\n```\nInput:\n1 ?   2 ?   3 ?   4 ?   5\n\nOutput:\n1 ?   5 ?   2 ?   4 ?   3\n```"
      },
      {
        "title": "Approach",
        "content": "Three steps:\n\n```\n1. Find middle\n2. Reverse second half\n3. Merge two halves alternately\n```"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Find middle using slow/fast.\n2. Split list into two halves.\n3. Reverse second half.\n4. Merge:\n```\nfirst ?   second ?   first ?   second...\n```"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    void reorderList(ListNode* head) {\n        if (head == nullptr || head->next == nullptr)\n            return;\n\n        // 1. Find middle\n        ListNode* slow = head;\n        ListNode* fast = head;\n\n        while (fast->next != nullptr && fast->next->next != nullptr) {\n            slow = slow->next;\n            fast = fast->next->next;\n        }\n\n        // Second half starts after slow\n        ListNode* second = slow->next;\n        slow->next = nullptr;\n\n        // 2. Reverse second half\n        ListNode* prev = nullptr;\n\n        while (second != nullptr) {\n            ListNode* next = second->next;\n            second->next = prev;\n            prev = second;\n            second = next;\n        }\n\n        second = prev;\n\n        // 3. Merge alternately\n        ListNode* first = head;\n\n        while (second != nullptr) {\n            ListNode* firstNext = first->next;\n            ListNode* secondNext = second->next;\n\n            first->next = second;\n            second->next = firstNext;\n\n            first = firstNext;\n            second = secondNext;\n        }\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Reorder List = Middle + Reverse + Merge.**\nThis is a very important linked-list interview pattern.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  },
  {
    "number": 65,
    "title": "Palindrome Linked List",
    "sections": [
      {
        "title": "Problem",
        "content": "Determine whether a linked list reads the same forward and backward.\n\n### Example 1\n\n```\nInput: 1 ?   2 ?   2 ?   1\nOutput: true\n```\n\n### Example 2\n\n```\nInput: 1 ?   2\nOutput: false\n```"
      },
      {
        "title": "Approach",
        "content": "Use `O(1)` extra space:\n\n```\nFind middle\n?   Reverse second half\n?   Compare both halves\n```"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Find the middle.\n2. Reverse the second half.\n3. Compare first half and reversed second half.\n4. If every value matches ?   palindrome.\n5. Optionally restore the list."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    ListNode* reverseList(ListNode* head) {\n        ListNode* prev = nullptr;\n\n        while (head != nullptr) {\n            ListNode* next = head->next;\n            head->next = prev;\n            prev = head;\n            head = next;\n        }\n\n        return prev;\n    }\n\n    bool isPalindrome(ListNode* head) {\n        if (head == nullptr || head->next == nullptr)\n            return true;\n\n        // Find middle\n        ListNode* slow = head;\n        ListNode* fast = head;\n\n        while (fast->next != nullptr && fast->next->next != nullptr) {\n            slow = slow->next;\n            fast = fast->next->next;\n        }\n\n        // Reverse second half\n        ListNode* second = reverseList(slow->next);\n\n        // Compare\n        ListNode* first = head;\n        ListNode* temp = second;\n\n        while (temp != nullptr) {\n            if (first->val != temp->val)\n                return false;\n\n            first = first->next;\n            temp = temp->next;\n        }\n\n        return true;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Palindrome LL = middle + reverse second half + compare.**\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  },
  {
    "number": 66,
    "title": "Intersection of Two Linked Lists",
    "sections": [
      {
        "title": "Problem",
        "content": "Given two singly linked lists, find their intersection node.\n\nThe intersection is based on **node identity**, not equal values.\n\n### Example 1\n\n```\nA: 4 ?   1 ? ? ? ?\n            ?  \n            8 ?   4 ?   5\n            ?  \nB: 5 ?   6 ?   1 ? ? ? ?\n\nOutput: node 8\n```\n\n### Example 2\n\n```\nA: 1 ?   2 ?   3\n\nB: 4 ?   5\n\nOutput: nullptr\n```"
      },
      {
        "title": "Approach",
        "content": "Use two pointers.\n\nWhen a pointer reaches the end of its list, move it to the head of the other list.\n\nEventually both pointers travel the same total distance:\n\n```\nA + B\n```\n\nTherefore, they meet at the intersection."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. `p = headA`\n2. `q = headB`\n3. Move each one step.\n4. If `p == nullptr`, set `p = headB`.\n5. If `q == nullptr`, set `q = headA`.\n6. Continue until `p == q`."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    ListNode* getIntersectionNode(ListNode* headA,\n                                  ListNode* headB) {\n        ListNode* p = headA;\n        ListNode* q = headB;\n\n        while (p != q) {\n            p = (p == nullptr) ? headB : p->next;\n            q = (q == nullptr) ? headA : q->next;\n        }\n\n        return p;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n + m)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Intersection = switch heads when reaching NULL.**\nThe comparison must be:\n\n```\np == q\n```\n\nnot:\n\n```\np->val == q->val\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  },
  {
    "number": 67,
    "title": "Add Two Numbers",
    "sections": [
      {
        "title": "Problem",
        "content": "Two non-empty linked lists represent two non-negative integers in **reverse order**.\n\nAdd them and return the result as a linked list.\n\n### Example 1\n\n```\nInput:\n2 ?   4 ?   3\n5 ?   6 ?   4\n\nOutput:\n7 ?   0 ?   8\n```\n\nBecause:\n\n```\n342 + 465 = 807\n```\n\n### Example 2\n\n```\nInput:\n0\n0\n\nOutput:\n0\n```"
      },
      {
        "title": "Approach",
        "content": "Simulate normal addition digit by digit.\n\nMaintain a `carry`.\n\n```\nsum = digit1 + digit2 + carry\ndigit = sum % 10\ncarry = sum / 10\n```"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Create dummy node.\n2. While either list or carry exists:\n- Get both digits.\n- Add them with carry.\n- Create result node.\n- Update carry.\n3. Return `dummy->next`."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n        ListNode dummy(0);\n        ListNode* curr = &dummy;\n\n        int carry = 0;\n\n        while (l1 != nullptr || l2 != nullptr || carry != 0) {\n            int x = (l1 != nullptr) ? l1->val : 0;\n            int y = (l2 != nullptr) ? l2->val : 0;\n\n            int sum = x + y + carry;\n\n            carry = sum / 10;\n\n            curr->next = new ListNode(sum % 10);\n            curr = curr->next;\n\n            if (l1 != nullptr)\n                l1 = l1->next;\n\n            if (l2 != nullptr)\n                l2 = l2->next;\n        }\n\n        return dummy.next;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(max(n, m))`\n- **Space:** `O(max(n, m))` for the output list"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Add Two Numbers = digit addition + carry.**\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  },
  {
    "number": 68,
    "title": "Copy List with Random Pointer",
    "sections": [
      {
        "title": "Problem",
        "content": "Each node contains:\n\n```\nval\nnext\nrandom\n```\n\nCreate a **deep copy** of the linked list.\n\nThe `random` pointer may point to any node or `nullptr`.\n\n### Example 1\n\n```\nInput:\n1 ?   2\nrandom(1) ?   2\nrandom(2) ?   2\n\nOutput:\nDeep copy with identical next/random structure.\n```\n\n### Example 2\n\n```\nInput:\n1\nrandom(1) ?   nullptr\n\nOutput:\nIndependent copy of node 1.\n```"
      },
      {
        "title": "Approach",
        "content": "Use a hash map:\n\n```\noriginal node ?   copied node\n```\n\nTwo passes:\n\n1. Create all copied nodes.\n2. Connect `next` and `random` pointers."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Traverse original list.\n2. Create a copy for every node.\n3. Store mapping in `unordered_map`.\n4. Traverse again.\n5. Set:\n```\ncopy->next\ncopy->random\n```\n6. Return copied head."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    Node* copyRandomList(Node* head) {\n        if (head == nullptr)\n            return nullptr;\n\n        unordered_map<Node*, Node*> mp;\n\n        // First pass: create copied nodes\n        Node* curr = head;\n\n        while (curr != nullptr) {\n            mp[curr] = new Node(curr->val);\n            curr = curr->next;\n        }\n\n        // Second pass: connect pointers\n        curr = head;\n\n        while (curr != nullptr) {\n            mp[curr]->next = mp[curr->next];\n            mp[curr]->random = mp[curr->random];\n\n            curr = curr->next;\n        }\n\n        return mp[head];\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(n)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Random Pointer ?   map original node to copied node.**\nImportant:\n\n```\noriginal address ?   copied address\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  },
  {
    "number": 69,
    "title": "Merge K Sorted Lists",
    "sections": [
      {
        "title": "Problem",
        "content": "Given `k` sorted linked lists, merge them into one sorted linked list.\n\n### Example 1\n\n```\nInput:\n1 ?   4 ?   5\n1 ?   3 ?   4\n2 ?   6\n\nOutput:\n1 ?   1 ?   2 ?   3 ?   4 ?   4 ?   5 ?   6\n```\n\n### Example 2\n\n```\nInput:\n[]\n[]\n\nOutput:\n[]\n```"
      },
      {
        "title": "Approach",
        "content": "Use a **min-heap** containing the smallest current node from each list.\n\nAt every step:\n\n1. Remove smallest node.\n2. Add it to result.\n3. Insert its next node into heap."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Push the head of every non-empty list into a min-heap.\n2. Pop the smallest node.\n3. Attach it to result.\n4. If it has a next node, push that node.\n5. Continue until heap is empty."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    struct Compare {\n        bool operator()(ListNode* a, ListNode* b) {\n            return a->val > b->val;\n        }\n    };\n\n    ListNode* mergeKLists(vector<ListNode*>& lists) {\n        priority_queue<ListNode*,\n                       vector<ListNode*>,\n                       Compare> pq;\n\n        // Add first node of every list\n        for (ListNode* head : lists) {\n            if (head != nullptr)\n                pq.push(head);\n        }\n\n        ListNode dummy(0);\n        ListNode* curr = &dummy;\n\n        while (!pq.empty()) {\n            ListNode* node = pq.top();\n            pq.pop();\n\n            curr->next = node;\n            curr = curr->next;\n\n            // Add next node from the same list\n            if (node->next != nullptr)\n                pq.push(node->next);\n        }\n\n        return dummy.next;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "Let `N` be the total number of nodes and `k` the number of lists.\n\n- **Time:** `O(N log k)`\n- **Space:** `O(k)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Merge K Sorted Lists = min-heap of current heads.**\nOnly up to `k` nodes are inside the heap at a time.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  },
  {
    "number": 70,
    "title": "LRU Cache",
    "sections": [
      {
        "title": "Problem",
        "content": "Design a Least Recently Used (**LRU**) cache supporting:\n\n```\nget(key)\nput(key, value)\n```\n\nBoth operations must work in **O(1)** average time.\n\nWhen capacity is exceeded, remove the **least recently used** item.\n\n### Example 1\n\n```\ncapacity = 2\n\nput(1,1)\nput(2,2)\nget(1) ?   1\nput(3,3)\nget(2) ?   -1\n```\n\n`2` was least recently used, so it was removed.\n\n### Example 2\n\n```\ncapacity = 2\n\nput(1,1)\nput(2,2)\nget(1) ?   1\nput(2,20)\n\nget(2) ?   20\n```\n\nUpdating `2` also makes it recently used."
      },
      {
        "title": "Approach",
        "content": "Use two data structures together:\n\n```\nunordered_map\n+\ndoubly linked list\n```\n\n### Hash map\nProvides:\n\n```\nkey ?   node\n```\n\nin average `O(1)`.\n\n### Doubly linked list\nMaintains usage order:\n\n```\nMost Recently Used\n        ?  \n      [ ... ]\n        ?  \nLeast Recently Used\n```\n\nUse dummy head and tail nodes to simplify insertion/deletion."
      },
      {
        "title": "Algorithm / Steps",
        "content": "### `get(key)`\n\n1. Check map.\n2. If absent ?   `-1`.\n3. Move node to front.\n4. Return value.\n\n### `put(key, value)`\n\n1. If key already exists:\n- Update value.\n- Move node to front.\n2. Otherwise:\n- Create node.\n- Insert at front.\n- Add to map.\n3. If capacity exceeded:\n- Remove node before tail.\n- Remove it from map."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass LRUCache {\nprivate:\n    struct Node {\n        int key;\n        int value;\n        Node* prev;\n        Node* next;\n\n        Node(int k, int v)\n            : key(k), value(v), prev(nullptr), next(nullptr) {}\n    };\n\n    int capacity;\n\n    // key -> corresponding linked-list node\n    unordered_map<int, Node*> mp;\n\n    // Dummy nodes\n    Node* head; // Most recently used side\n    Node* tail; // Least recently used side\n\n    // Remove a node from the list\n    void remove(Node* node) {\n        node->prev->next = node->next;\n        node->next->prev = node->prev;\n    }\n\n    // Insert node immediately after head\n    void insertFront(Node* node) {\n        node->next = head->next;\n        node->prev = head;\n\n        head->next->prev = node;\n        head->next = node;\n    }\n\npublic:\n    LRUCache(int capacity) {\n        this->capacity = capacity;\n\n        head = new Node(0, 0);\n        tail = new Node(0, 0);\n\n        head->next = tail;\n        tail->prev = head;\n    }\n\n    int get(int key) {\n        if (!mp.count(key))\n            return -1;\n\n        Node* node = mp[key];\n\n        // Mark as most recently used\n        remove(node);\n        insertFront(node);\n\n        return node->value;\n    }\n\n    void put(int key, int value) {\n        // Key already exists\n        if (mp.count(key)) {\n            Node* node = mp[key];\n\n            node->value = value;\n\n            // Move to most recently used position\n            remove(node);\n            insertFront(node);\n\n            return;\n        }\n\n        // Create new node\n        Node* node = new Node(key, value);\n\n        mp[key] = node;\n        insertFront(node);\n\n        // Remove least recently used item\n        if (mp.size() > capacity) {\n            Node* lru = tail->prev;\n\n            remove(lru);\n            mp.erase(lru->key);\n\n            delete lru;\n        }\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **`get`:** `O(1)` average\n- **`put`:** `O(1)` average\n- **Space:** `O(capacity)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **LRU Cache = HashMap + Doubly Linked List.**\nRemember:\n\n```\nHashMap ?   O(1) lookup\nDLL     ?   O(1) remove + move\n```\n\nOrder:\n\n```\nHEAD\n ?  \nMost Recently Used\n ?  \n...\n ?  \nLeast Recently Used\n ?  \nTAIL\n```\n\nWhen full:\n\n```\nRemove tail->prev\n```\n\n---\n\n# ?x ? Q59? 70 Quick Revision Map\nQProblemCore PatternKey Idea**59**Reverse Linked ListPointer Manipulation`prev, curr, next`**60**Merge Two Sorted ListsTwo PointersDummy + smaller node**61**Linked List CycleFast/SlowFloyd's algorithm**62**Middle of Linked ListFast/SlowFast moves 2? **63**Remove Nth From EndTwo PointersMaintain `n` gap**64**Reorder ListReorderingMiddle + reverse + merge**65**Palindrome Linked ListTwo PointersReverse second half**66**IntersectionTwo PointersSwitch heads**67**Add Two NumbersSimulationCarry**68**Copy Random PointerHashMapOriginal ?   Copy**69**Merge K ListsHeapMin-heap**70**LRU CacheHashMap + DLL`O(1)` get/put\n\n## ?x? Must-Know Linked List Patterns\n\n```\nREVERSE\n?   prev / curr / next\n\nFAST + SLOW\n?   cycle\n?   middle\n\nNTH FROM END\n?   two pointers + gap\n\nREORDER\n?   middle\n?   reverse\n?   merge\n\nPALINDROME\n?   middle\n?   reverse\n?   compare\n\nINTERSECTION\n?   switch heads\n\nADD TWO NUMBERS\n?   carry\n\nRANDOM POINTER\n?   HashMap\n\nMERGE K LISTS\n?   Min Heap\n\nLRU\n?   HashMap + Doubly Linked List\n```\n\n**One correction to keep in your master list:** Q70 is an advanced **design/data-structure** problem rather than a pure pointer-manipulation problem, but it absolutely belongs in the linked-list interview section because the standard `O(1)` solution depends on a doubly linked list + hash map."
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  },
  {
    "number": 71,
    "title": "Maximum Depth of Binary Tree",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nGiven the root of a binary tree, return its **maximum depth**.\n\nThe depth is the number of nodes along the longest path from the root to a leaf.\n\n### Example 1\n\n```\nInput:\n    3\n   / \\\n  9  20\n     / \\\n    15  7\n\nOutput: 3\n```\n\n### Example 2\n\n```\nInput:\n    1\n     \\\n      2\n\nOutput: 2\n```\n\n**Important assumption:** An empty tree has depth `0`.\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use **DFS recursion**.\n\nFor every node:\n\n```\ndepth = 1 + max(left subtree depth, right subtree depth)\n```\n\nIf the node is `nullptr`, its depth is `0`.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. If root is `nullptr`, return `0`.\n2. Recursively find left subtree depth.\n3. Recursively find right subtree depth.\n4. Return:\n```\n1 + max(leftDepth, rightDepth)\n```\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int maxDepth(TreeNode* root) {\n        // Empty tree has depth 0\n        if (root == nullptr) {\n            return 0;\n        }\n\n        // Find depth of both subtrees\n        int leftDepth = maxDepth(root->left);\n        int rightDepth = maxDepth(root->right);\n\n        // Current node contributes 1\n        return 1 + max(leftDepth, rightDepth);\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)` ?  every node is visited once.\n- **Space:** `O(h)` ?  recursion stack, where `h` is tree height.\nWorst case: `O(n)` for a skewed tree.\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Maximum Depth = 1 + maximum(left, right).**\n\n```\nnull ?   0\nnode ?   1 + max(left, right)\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "For:\n\n```\n    3\n   / \\\n  9  20\n```\n\n```\ndepth(9)  = 1\ndepth(20) = 1\n\ndepth(3)\n= 1 + max(1, 1)\n= 2\n```\n\nFor the complete example, node `20` has depth `2`, so root depth is `3`.\n\n---"
      }
    ]
  },
  {
    "number": 72,
    "title": "Same Tree",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nGiven the roots of two binary trees, determine whether they are **structurally identical and contain the same values**.\n\n### Example 1\n\n```\nTree p:       1\n             / \\\n            2   3\n\nTree q:       1\n             / \\\n            2   3\n\nOutput: true\n```\n\n### Example 2\n\n```\nTree p:       1\n             /\n            2\n\nTree q:       1\n               \\\n                2\n\nOutput: false\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use DFS and compare corresponding nodes.\n\nFor two trees to be identical:\n\n1. Both nodes must be `nullptr`, or\n2. Both must exist with the same value, and\n3. Their left subtrees must be identical.\n4. Their right subtrees must be identical.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. If both nodes are `nullptr`, return `true`.\n2. If only one is `nullptr`, return `false`.\n3. If their values differ, return `false`.\n4. Recursively compare left children.\n5. Recursively compare right children.\n6. Return the result of both comparisons.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    bool isSameTree(TreeNode* p, TreeNode* q) {\n        // Both trees are empty at this position\n        if (p == nullptr && q == nullptr) {\n            return true;\n        }\n\n        // One is empty and the other is not\n        if (p == nullptr || q == nullptr) {\n            return false;\n        }\n\n        // Values must match\n        if (p->val != q->val) {\n            return false;\n        }\n\n        // Both left and right subtrees must match\n        return isSameTree(p->left, q->left) &&\n               isSameTree(p->right, q->right);\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)` where `n` is the number of corresponding nodes examined.\n- **Space:** `O(h)` recursion stack.\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Same Tree = same structure + same values.**\nAlways check:\n\n```\nnull/null ?   true\none null  ?   false\nvalue diff ?   false\notherwise ?   check left + right\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\np = 1\n   /\n  2\n\nq = 1\n   /\n  2\n```\n\nCompare `1` ?   same.\n\nCompare left `2` ?   same.\n\nCompare their children:\n\n```\nnullptr vs nullptr ?   true\n```\n\nTherefore:\n\n```\ntrue\n```\n\n---"
      }
    ]
  },
  {
    "number": 73,
    "title": "Invert Binary Tree",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nGiven the root of a binary tree, invert the tree by swapping every node's left and right children.\n\n### Example 1\n\n```\nInput:\n    4\n   / \\\n  2   7\n / \\ / \\\n1  3 6  9\n\nOutput:\n    4\n   / \\\n  7   2\n / \\ / \\\n9  6 3  1\n```\n\n### Example 2\n\n```\nInput:\n    1\n   /\n  2\n\nOutput:\n    1\n     \\\n      2\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use DFS.\n\nAt every node:\n\n```\nswap(left, right)\n```\n\nThen recursively invert both subtrees.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. If root is `nullptr`, return `nullptr`.\n2. Swap `root->left` and `root->right`.\n3. Invert the new left subtree.\n4. Invert the new right subtree.\n5. Return root.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    TreeNode* invertTree(TreeNode* root) {\n        if (root == nullptr) {\n            return nullptr;\n        }\n\n        // Swap the two children\n        swap(root->left, root->right);\n\n        // Recursively invert both subtrees\n        invertTree(root->left);\n        invertTree(root->right);\n\n        return root;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(h)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Invert Tree = swap left and right at every node.**\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\n    1\n   / \\\n  2   3\n```\n\nAt `1`:\n\n```\nleft = 2\nright = 3\n\nswap ?   left = 3, right = 2\n```\n\nThen recursively process `3` and `2`.\n\nResult:\n\n```\n    1\n   / \\\n  3   2\n```\n\n---"
      }
    ]
  },
  {
    "number": 74,
    "title": "Symmetric Tree",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nDetermine whether a binary tree is a **mirror of itself** around its center.\n\n### Example 1\n\n```\nInput:\n      1\n     / \\\n    2   2\n   / \\ / \\\n  3  4 4  3\n\nOutput: true\n```\n\n### Example 2\n\n```\nInput:\n      1\n     / \\\n    2   2\n     \\   \\\n      3   3\n\nOutput: false\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Compare two subtrees as **mirrors**.\n\nFor two nodes to be mirrors:\n\n- Their values must match.\n- Left subtree of first must mirror right subtree of second.\n- Right subtree of first must mirror left subtree of second.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Start with `root->left` and `root->right`.\n2. If both are `nullptr`, return `true`.\n3. If only one is `nullptr`, return `false`.\n4. If values differ, return `false`.\n5. Compare:\n```\nleft->left with right->right\n```\n6. Compare:\n```\nleft->right with right->left\n```\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    bool isMirror(TreeNode* left, TreeNode* right) {\n        // Both sides are empty\n        if (left == nullptr && right == nullptr) {\n            return true;\n        }\n\n        // Only one side is empty\n        if (left == nullptr || right == nullptr) {\n            return false;\n        }\n\n        // Values must match\n        if (left->val != right->val) {\n            return false;\n        }\n\n        // Compare opposite sides\n        return isMirror(left->left, right->right) &&\n               isMirror(left->right, right->left);\n    }\n\n    bool isSymmetric(TreeNode* root) {\n        if (root == nullptr) {\n            return true;\n        }\n\n        return isMirror(root->left, root->right);\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(h)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Symmetric = mirror comparison.**\nDon't compare:\n\n```\nleft-left\nright-right\n```\n\nCompare:\n\n```\nleft-left ?   right-right\nleft-right ?   right-left\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\n      1\n     / \\\n    2   2\n   /     \\\n  3       3\n```\n\nCompare:\n\n```\n2 == 2\n```\n\nThen:\n\n```\nleft child's left = 3\nright child's right = 3\n```\n\nMatch.\n\nOther sides are both `nullptr`.\n\nTherefore:\n\n```\ntrue\n```\n\n---"
      }
    ]
  },
  {
    "number": 75,
    "title": "Path Sum",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nGiven a binary tree and an integer `targetSum`, determine whether there exists a **root-to-leaf path** whose node values add up to `targetSum`.\n\n### Example 1\n\n```\nInput:\n      5\n     / \\\n    4   8\n   /   / \\\n  11  13  4\n /  \\\n7    2\n\ntargetSum = 22\n\nOutput: true\n```\n\nPath:\n\n```\n5 ?   4 ?   11 ?   2 = 22\n```\n\n### Example 2\n\n```\nInput:\n    1\n   / \\\n  2   3\n\ntargetSum = 5\n\nOutput: false\n```\n\n**Important:** The path must end at a **leaf**.\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use DFS while subtracting the current node's value from the target.\n\nAt a leaf:\n\n```\nremaining target == node value\n```\n\nmeans a valid path exists.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. If root is `nullptr`, return `false`.\n2. Subtract `root->val` from `targetSum`.\n3. If root is a leaf:\n- Return whether remaining sum is `0`.\n4. Recursively search left subtree.\n5. Recursively search right subtree.\n6. Return `left || right`.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    bool hasPathSum(TreeNode* root, int targetSum) {\n        if (root == nullptr) {\n            return false;\n        }\n\n        // Subtract current node's value\n        targetSum -= root->val;\n\n        // Check only root-to-leaf paths\n        if (root->left == nullptr && root->right == nullptr) {\n            return targetSum == 0;\n        }\n\n        // Search either subtree\n        return hasPathSum(root->left, targetSum) ||\n               hasPathSum(root->right, targetSum);\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)` in the worst case.\n- **Space:** `O(h)` recursion stack.\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Path Sum = DFS + remaining target + leaf check.**\nCritical mistake to avoid:\n\n**Don't return true at an internal node just because the sum becomes zero. The path must end at a leaf.**\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "Path:\n\n```\n5 ?   4 ?   11 ?   2\n```\n\nTarget:\n\n```\n22\n```\n\n```\n22 - 5 = 17\n17 - 4 = 13\n13 - 11 = 2\n2 - 2 = 0\n```\n\nNode `2` is a leaf and remaining sum is `0`.\n\nTherefore:\n\n```\ntrue\n```\n\n---"
      }
    ]
  },
  {
    "number": 76,
    "title": "Count Good Nodes in Binary Tree",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nA node is **good** if there is no node with a value greater than it on the path from the root to that node.\n\nCount the number of good nodes.\n\n### Example 1\n\n```\nInput:\n      3\n     / \\\n    1   4\n   /   / \\\n  3   1   5\n\nOutput: 4\n```\n\nGood nodes:\n\n```\n3, 4, 3, 5\n```\n\n### Example 2\n\n```\nInput:\n    3\n   /\n  3\n\nOutput: 2\n```\n\nBoth `3`s are good because equality is allowed.\n\n---"
      },
      {
        "title": "Approach",
        "content": "During DFS, maintain:\n\n```\nmaximum value seen on current root-to-node path\n```\n\nA node is good if:\n\n```\nnode->val >= maxSeen\n```\n\nThen update `maxSeen`.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Start DFS with `maxSeen = root->val`.\n2. At each node:\n- If `node->val >= maxSeen`, count it.\n3. Update:\n```\nmaxSeen = max(maxSeen, node->val)\n```\n4. Recursively process left and right.\n5. Return total count.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int dfs(TreeNode* node, int maxSeen) {\n        if (node == nullptr) {\n            return 0;\n        }\n\n        int good = 0;\n\n        // Node is good if it is at least as large\n        // as every previous node on the path\n        if (node->val >= maxSeen) {\n            good = 1;\n        }\n\n        // Update maximum for this path\n        maxSeen = max(maxSeen, node->val);\n\n        return good\n             + dfs(node->left, maxSeen)\n             + dfs(node->right, maxSeen);\n    }\n\n    int goodNodes(TreeNode* root) {\n        if (root == nullptr) {\n            return 0;\n        }\n\n        return dfs(root, root->val);\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(h)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Good Node = node value ?0? maximum seen from root.**\nCarry one piece of information down the DFS:\n\n```\nmaxSeen\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "For:\n\n```\n      3\n     / \\\n    1   4\n   /   / \\\n  3   1   5\n```\n\nStart:\n\n```\nmaxSeen = 3\n```\n\nNode `3` ?   good.\n\nLeft `1`:\n\n```\n1 < 3 ?   not good\n```\n\nIts child `3`:\n\n```\n3 >= 3 ?   good\n```\n\nRight `4`:\n\n```\n4 >= 3 ?   good\nmaxSeen = 4\n```\n\nChild `1` ?   not good.\n\nChild `5`:\n\n```\n5 >= 4 ?   good\n```\n\nTotal:\n\n```\n4\n```\n\n---\n\n# Pattern: BFS / Level Order\n\n---"
      }
    ]
  },
  {
    "number": 77,
    "title": "Binary Tree Level Order Traversal",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nReturn the values of a binary tree level by level from top to bottom.\n\n### Example 1\n\n```\nInput:\n      3\n     / \\\n    9  20\n       / \\\n      15  7\n\nOutput:\n[[3],[9,20],[15,7]]\n```\n\n### Example 2\n\n```\nInput:\n    1\n   /\n  2\n\nOutput:\n[[1],[2]]\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use **BFS with a queue**.\n\nThe queue stores nodes of the current and upcoming levels.\n\nAt the beginning of every level, record:\n\n```\nqueue.size()\n```\n\nThat tells us exactly how many nodes belong to that level.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. If root is `nullptr`, return empty result.\n2. Push root into queue.\n3. While queue isn't empty:\n- Get current level size.\n- Process exactly that many nodes.\n- Add their values to current level.\n- Push their children.\n4. Add current level to result.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<vector<int>> levelOrder(TreeNode* root) {\n        vector<vector<int>> result;\n\n        if (root == nullptr) {\n            return result;\n        }\n\n        queue<TreeNode*> q;\n        q.push(root);\n\n        while (!q.empty()) {\n            int levelSize = q.size();\n            vector<int> currentLevel;\n\n            // Process exactly one level\n            for (int i = 0; i < levelSize; i++) {\n                TreeNode* node = q.front();\n                q.pop();\n\n                currentLevel.push_back(node->val);\n\n                if (node->left) {\n                    q.push(node->left);\n                }\n\n                if (node->right) {\n                    q.push(node->right);\n                }\n            }\n\n            result.push_back(currentLevel);\n        }\n\n        return result;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(n)` for the queue and output.\nAuxiliary queue space is `O(w)`, where `w` is maximum tree width.\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Level order = BFS + queue + `levelSize = q.size()`.**\nThat `q.size()` trick is the key.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\n      3\n     / \\\n    9  20\n       / \\\n      15  7\n```\n\nQueue:\n\n```\n[3]\n```\n\nProcess level:\n\n```\n[3]\n```\n\nQueue becomes:\n\n```\n[9,20]\n```\n\nNext level:\n\n```\n[9,20]\n```\n\nQueue:\n\n```\n[15,7]\n```\n\nFinal:\n\n```\n[[3],[9,20],[15,7]]\n```\n\n---"
      }
    ]
  },
  {
    "number": 78,
    "title": "Binary Tree Right Side View",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nReturn the values of the nodes visible when looking at the binary tree from the **right side**.\n\n### Example 1\n\n```\nInput:\n    1\n   / \\\n  2   3\n   \\   \\\n    5   4\n\nOutput: [1,3,4]\n```\n\n### Example 2\n\n```\nInput:\n    1\n   /\n  2\n   \\\n    5\n\nOutput: [1,2,5]\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use BFS level order.\n\nFor each level, the **last node processed** is the rightmost node of that level.\n\nAdd it to the answer.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Push root into queue.\n2. For each level:\n- Process all nodes.\n- When `i == levelSize - 1`, record that node.\n3. Add children to the queue.\n4. Continue until queue is empty.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<int> rightSideView(TreeNode* root) {\n        vector<int> result;\n\n        if (root == nullptr) {\n            return result;\n        }\n\n        queue<TreeNode*> q;\n        q.push(root);\n\n        while (!q.empty()) {\n            int levelSize = q.size();\n\n            for (int i = 0; i < levelSize; i++) {\n                TreeNode* node = q.front();\n                q.pop();\n\n                // Last node of this level is visible\n                if (i == levelSize - 1) {\n                    result.push_back(node->val);\n                }\n\n                if (node->left) {\n                    q.push(node->left);\n                }\n\n                if (node->right) {\n                    q.push(node->right);\n                }\n            }\n        }\n\n        return result;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(n)` including queue/output.\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Right Side View + BFS ?   take the LAST node of every level.**\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\n    1\n   / \\\n  2   3\n   \\   \\\n    5   4\n```\n\nLevels:\n\n```\nLevel 1 ?   [1]     ?   take 1\nLevel 2 ?   [2,3]   ?   take 3\nLevel 3 ?   [5,4]   ?   take 4\n```\n\nAnswer:\n\n```\n[1,3,4]\n```\n\n---"
      }
    ]
  },
  {
    "number": 79,
    "title": "Average of Levels in Binary Tree",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nReturn the average value of nodes at each level of a binary tree.\n\n### Example 1\n\n```\nInput:\n      3\n     / \\\n    9  20\n       / \\\n      15  7\n\nOutput:\n[3.0, 14.5, 11.0]\n```\n\n### Example 2\n\n```\nInput:\n    1\n   / \\\n  2   4\n\nOutput:\n[1.0, 3.0]\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use BFS.\n\nFor each level:\n\n1. Process all nodes.\n2. Calculate their sum.\n3. Divide by number of nodes in that level.\nUse `long long` for the sum to avoid unnecessary integer overflow concerns.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Push root into queue.\n2. For each level:\n- Get `levelSize`.\n- Sum values of all nodes in that level.\n- Calculate:\n```\nsum / levelSize\n```\n3. Store the average.\n4. Add children to queue.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<double> averageOfLevels(TreeNode* root) {\n        vector<double> result;\n\n        if (root == nullptr) {\n            return result;\n        }\n\n        queue<TreeNode*> q;\n        q.push(root);\n\n        while (!q.empty()) {\n            int levelSize = q.size();\n            long long sum = 0;\n\n            for (int i = 0; i < levelSize; i++) {\n                TreeNode* node = q.front();\n                q.pop();\n\n                sum += node->val;\n\n                if (node->left) {\n                    q.push(node->left);\n                }\n\n                if (node->right) {\n                    q.push(node->right);\n                }\n            }\n\n            // Convert to double for accurate average\n            result.push_back(static_cast<double>(sum) / levelSize);\n        }\n\n        return result;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(n)` including queue/output.\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Average of Levels = BFS + level sum / level size.**\nRemember:\n\n```\nlevelSize = q.size()\naverage = sum / levelSize\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\n      3\n     / \\\n    9  20\n       / \\\n      15  7\n```\n\nLevel 1:\n\n```\nsum = 3\nsize = 1\naverage = 3 / 1 = 3.0\n```\n\nLevel 2:\n\n```\nsum = 9 + 20 = 29\nsize = 2\naverage = 14.5\n```\n\nLevel 3:\n\n```\nsum = 15 + 7 = 22\nsize = 2\naverage = 11.0\n```\n\nAnswer:\n\n```\n[3.0, 14.5, 11.0]\n```\n\n---"
      }
    ]
  },
  {
    "number": 80,
    "title": "Minimum Depth of Binary Tree",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nReturn the **minimum depth** of a binary tree.\n\nMinimum depth is the number of nodes along the shortest path from the root to the **nearest leaf**.\n\n### Example 1\n\n```\nInput:\n    3\n   / \\\n  9  20\n     / \\\n    15  7\n\nOutput: 2\n```\n\nThe nearest leaf is `9`.\n\n### Example 2\n\n```\nInput:\n    2\n     \\\n      3\n       \\\n        4\n\nOutput: 3\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use **BFS**.\n\nWhy?\n\nBFS visits the tree level by level. Therefore, the **first leaf encountered is automatically the nearest leaf**.\n\nThis avoids exploring unnecessary deeper levels.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. If root is `nullptr`, return `0`.\n2. Push root into queue.\n3. Start `depth = 1`.\n4. Process one level at a time.\n5. If a node is a leaf:\n- Immediately return current depth.\n6. Otherwise, push its children.\n7. Increase depth after completing the level.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int minDepth(TreeNode* root) {\n        if (root == nullptr) {\n            return 0;\n        }\n\n        queue<TreeNode*> q;\n        q.push(root);\n\n        int depth = 1;\n\n        while (!q.empty()) {\n            int levelSize = q.size();\n\n            for (int i = 0; i < levelSize; i++) {\n                TreeNode* node = q.front();\n                q.pop();\n\n                // First leaf found is the nearest leaf\n                if (node->left == nullptr && node->right == nullptr) {\n                    return depth;\n                }\n\n                if (node->left) {\n                    q.push(node->left);\n                }\n\n                if (node->right) {\n                    q.push(node->right);\n                }\n            }\n\n            depth++;\n        }\n\n        return depth;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)` worst case.\n- **Space:** `O(n)` worst case for the queue.\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Minimum Depth ?   BFS ?   first leaf wins.**\nVery important:\n\n```\nMinimum depth is root ?   LEAF\n```\n\nNot merely root ?   `nullptr`.\n\nA node with only one child is **not** a leaf.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\n      3\n     / \\\n    9  20\n       / \\\n      15  7\n```\n\n### Depth 1\n\n```\n3\n```\n\nNot a leaf.\n\n### Depth 2\n\n```\n9, 20\n```\n\n`9` is a leaf.\n\nTherefore immediately return:\n\n```\n2\n```\n\n---\n\n# ?xR? Trees ?  Pattern Revision\n#ProblemMain PatternKey Idea71Maximum DepthDFS`1 + max(left,right)`72Same TreeDFSCompare structure + values73Invert Binary TreeDFSSwap left/right74Symmetric TreeDFSCompare mirror subtrees75Path SumDFSTrack remaining sum to leaf76Count Good NodesDFSTrack `maxSeen`77Level Order TraversalBFSQueue + `levelSize`78Right Side ViewBFSLast node of each level79Average of LevelsBFSLevel sum / level size80Minimum DepthBFSFirst leaf encountered\n\n### ?x ? Remember the split\n\n```\nTREES\n?  \n? S? ? ? DFS\n?     ? S? ? ? Depth\n?     ? S? ? ? Comparison\n?     ? S? ? ? Transformation\n?     ? S? ? ? Mirror\n?     ? S? ? ? Path\n?     ?  ? ? ? Path-dependent state\n?  \n?  ? ? ? BFS\n    ?  ? ? ? Level-by-level\n        ? S? ? ? Level Order\n        ? S? ? ? Right View\n        ? S? ? ? Average\n        ?  ? ? ? Minimum Depth\n```\n\n**Interview trigger:**\nIf the question says **?path,⬝ ?subtree,⬝ ?compare,⬝ ?mirror,⬝ or ?maximum depth⬝**, think **DFS** first.\nIf it says **?level,⬝ ?nearest,⬝ ?first level,⬝ ?right side by level⬝**, think **BFS** first."
      }
    ]
  },
  {
    "number": 81,
    "title": "Validate Binary Search Tree",
    "sections": [
      {
        "title": "Problem",
        "content": "Given the root of a binary tree, determine whether it is a **valid Binary Search Tree (BST)**.\n\nA valid BST satisfies:\n\n- Every node in the left subtree `< node->val`\n- Every node in the right subtree `> node->val`\n- The rule must hold for the **entire subtree**, not just immediate children.\n\n### Example 1\n\n```\nInput:  [2,1,3]\n\n      2\n     / \\\n    1   3\n\nOutput: true\n```\n\n### Example 2\n\n```\nInput:  [5,1,4,null,null,3,6]\n\n      5\n     / \\\n    1   4\n       / \\\n      3   6\n\nOutput: false\n```"
      },
      {
        "title": "Approach",
        "content": "Use **range validation**.\n\nFor every node, maintain the range of values it is allowed to have.\n\n- Left child ?   `(min, node->val)`\n- Right child ?   `(node->val, max)`\nUse `long long` bounds to safely handle integer limits."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Start with range `(-?~, +?~)`.\n2. For current node, check:\n```\nminValue < node->val < maxValue\n```\n3. Recursively validate the left subtree with upper bound `node->val`.\n4. Recursively validate the right subtree with lower bound `node->val`.\n5. If every node satisfies its range, return `true`."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    bool check(TreeNode* node, long long low, long long high) {\n        if (node == nullptr)\n            return true;\n\n        // Current node must lie strictly inside the valid range\n        if (node->val <= low || node->val >= high)\n            return false;\n\n        // Left subtree: values must be smaller\n        // Right subtree: values must be greater\n        return check(node->left, low, node->val) &&\n               check(node->right, node->val, high);\n    }\n\n    bool isValidBST(TreeNode* root) {\n        return check(root, LLONG_MIN, LLONG_MAX);\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(h)` recursion stack  \n- Balanced tree: `O(log n)`\n- Skewed tree: `O(n)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **BST validation = every node must satisfy a valid range.**\nChecking only `left < root < right` is **not enough**."
      },
      {
        "title": "Optional Dry Run",
        "content": "For:\n\n```\n    5\n   / \\\n  1   4\n     / \\\n    3   6\n```\n\nFor node `4`:\n\n```\nAllowed range = (5, ?~)\n4 is NOT > 5\n```\n\nTherefore:\n\n```\nfalse\n```\n\n---"
      }
    ]
  },
  {
    "number": 82,
    "title": "Kth Smallest Element in a BST",
    "sections": [
      {
        "title": "Problem",
        "content": "Given the root of a BST and an integer `k`, return the **kth smallest value** in the BST.\n\n### Example 1\n\n```\nInput:\n\n      3\n     / \\\n    1   4\n     \\\n      2\n\nk = 1\n\nOutput: 1\n```\n\n### Example 2\n\n```\nInput:\n\n      5\n     / \\\n    3   6\n   / \\\n  2   4\n /\n1\n\nk = 3\n\nOutput: 3\n```"
      },
      {
        "title": "Approach",
        "content": "**Inorder traversal of a BST gives values in sorted order.**\n\n```\nLeft ?   Root ?   Right\n```\n\nSo the kth visited node is the kth smallest element.\n\nUse an iterative stack to avoid traversing unnecessary nodes after finding the answer."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Start from root.\n2. Push all left nodes onto the stack.\n3. Pop the top node.\n4. Decrease `k`.\n5. If `k == 0`, return its value.\n6. Move to its right subtree.\n7. Repeat."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int kthSmallest(TreeNode* root, int k) {\n        stack<TreeNode*> st;\n        TreeNode* curr = root;\n\n        while (curr != nullptr || !st.empty()) {\n            // Go as far left as possible\n            while (curr != nullptr) {\n                st.push(curr);\n                curr = curr->left;\n            }\n\n            // Visit node\n            curr = st.top();\n            st.pop();\n\n            k--;\n\n            if (k == 0)\n                return curr->val;\n\n            // Visit right subtree next\n            curr = curr->right;\n        }\n\n        return -1; // k is guaranteed valid in LeetCode\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(H + k)` in the usual traversal bound, worst-case `O(n)`\n- **Space:** `O(H)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **BST + kth smallest ?   Inorder traversal.**\nBecause:\n\n```\nInorder BST = sorted order\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "For:\n\n```\n    3\n   / \\\n  1   4\n   \\\n    2\n```\n\nInorder:\n\n```\n1 ?   2 ?   3 ?   4\n```\n\nFor `k = 3`:\n\n```\n1 ?   k=2\n2 ?   k=1\n3 ?   k=0 ? \n```\n\nAnswer:\n\n```\n3\n```\n\n---"
      }
    ]
  },
  {
    "number": 83,
    "title": "Lowest Common Ancestor of a Binary Search Tree",
    "sections": [
      {
        "title": "Problem",
        "content": "Given a BST and two nodes `p` and `q`, find their **Lowest Common Ancestor (LCA)**.\n\nThe LCA is the lowest node that has both `p` and `q` as descendants.\n\n### Example 1\n\n```\n       6\n      / \\\n     2   8\n    / \\ / \\\n   0  4 7  9\n     / \\\n    3   5\n\np = 2, q = 8\n\nOutput: 6\n```\n\n### Example 2\n\n```\n       6\n      / \\\n     2   8\n    / \\\n   0   4\n      / \\\n     3   5\n\np = 2, q = 4\n\nOutput: 2\n```"
      },
      {
        "title": "Approach",
        "content": "Use the BST property.\n\n- If both `p` and `q` are smaller ?   go left.\n- If both are larger ?   go right.\n- Otherwise, current node is the split point ?   it is the LCA."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Start at root.\n2. If both values are smaller than root ?   move left.\n3. If both values are greater than root ?   move right.\n4. Otherwise, root is the LCA.\n5. Return root."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    TreeNode* lowestCommonAncestor(TreeNode* root,\n                                   TreeNode* p,\n                                   TreeNode* q) {\n        TreeNode* curr = root;\n\n        while (curr != nullptr) {\n            // Both nodes are in the left subtree\n            if (p->val < curr->val && q->val < curr->val) {\n                curr = curr->left;\n            }\n            // Both nodes are in the right subtree\n            else if (p->val > curr->val && q->val > curr->val) {\n                curr = curr->right;\n            }\n            // Split point: current node is the LCA\n            else {\n                return curr;\n            }\n        }\n\n        return nullptr;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(h)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **BST LCA = use values to decide left/right.**\nThe first node where `p` and `q` split directions is the LCA."
      },
      {
        "title": "Optional Dry Run",
        "content": "For:\n\n```\n    6\n   / \\\n  2   8\n     ...\n```\n\n`p = 2`, `q = 8`\n\nAt `6`:\n\n```\n2 < 6\n8 > 6\n```\n\nThey split at `6`.\n\nTherefore:\n\n```\nLCA = 6\n```\n\n---"
      }
    ]
  },
  {
    "number": 84,
    "title": "Convert Sorted Array to Binary Search Tree",
    "sections": [
      {
        "title": "Problem",
        "content": "Given a sorted array, convert it into a **height-balanced BST**.\n\n### Example 1\n\n```\nInput: [-10,-3,0,5,9]\n\nOutput:\n\n       0\n      / \\\n    -3   9\n    /   /\n  -10   5\n```\n\n### Example 2\n\n```\nInput: [1,3]\n\nPossible output:\n\n    1\n     \\\n      3\n```\n\nThis is height-balanced."
      },
      {
        "title": "Approach",
        "content": "Choose the **middle element** as the root.\n\nThen recursively:\n\n```\nLeft half  ?   Left subtree\nRight half ?   Right subtree\n```\n\nChoosing the middle keeps the tree balanced."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. If `left > right`, return `nullptr`.\n2. Find middle index:\n```\nmid = left + (right - left) / 2;\n```\n3. Create node using `nums[mid]`.\n4. Recursively build left subtree.\n5. Recursively build right subtree.\n6. Return root."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    TreeNode* build(vector<int>& nums, int left, int right) {\n        if (left > right)\n            return nullptr;\n\n        // Choose middle element as root\n        int mid = left + (right - left) / 2;\n\n        TreeNode* root = new TreeNode(nums[mid]);\n\n        // Left half becomes left subtree\n        root->left = build(nums, left, mid - 1);\n\n        // Right half becomes right subtree\n        root->right = build(nums, mid + 1, right);\n\n        return root;\n    }\n\n    TreeNode* sortedArrayToBST(vector<int>& nums) {\n        return build(nums, 0, nums.size() - 1);\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(log n)` for a balanced tree's recursion stack"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Sorted array ?   balanced BST = choose middle as root.**\nPattern:\n\n```\nMiddle ?   Root\nLeft half ?   Left\nRight half ?   Right\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\n[-10, -3, 0, 5, 9]\n```\n\nMiddle:\n\n```\n0\n```\n\nLeft half:\n\n```\n[-10, -3] ?   -3\n```\n\nRight half:\n\n```\n[5, 9] ?   9\n```\n\nResult:\n\n```\n       0\n      / \\\n    -3   9\n    /   /\n  -10   5\n```\n\n---"
      }
    ]
  },
  {
    "number": 85,
    "title": "Diameter of Binary Tree",
    "sections": [
      {
        "title": "Problem",
        "content": "Find the **diameter** of a binary tree.\n\nThe diameter is the number of **edges** in the longest path between any two nodes.\n\n### Example 1\n\n```\n    1\n   / \\\n  2   3\n / \\\n4   5\n\nOutput: 3\n```\n\nLongest path:\n\n```\n4 ?   2 ?   1 ?   3\n```\n\n3 edges.\n\n### Example 2\n\n```\n    1\n   /\n  2\n /\n3\n\nOutput: 2\n```"
      },
      {
        "title": "Approach",
        "content": "For every node:\n\n```\nDiameter through node\n= left height + right height\n```\n\nAt the same time, return the height of the subtree.\n\nUse **postorder DFS**."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Recursively calculate left subtree height.\n2. Recursively calculate right subtree height.\n3. Update diameter:\n```\ndiameter = max(diameter, leftHeight + rightHeight)\n```\n4. Return:\n```\n1 + max(leftHeight, rightHeight)\n```"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int diameter = 0;\n\n    int height(TreeNode* node) {\n        if (node == nullptr)\n            return 0;\n\n        int leftHeight = height(node->left);\n        int rightHeight = height(node->right);\n\n        // Longest path passing through this node\n        diameter = max(diameter, leftHeight + rightHeight);\n\n        // Return height of current subtree\n        return 1 + max(leftHeight, rightHeight);\n    }\n\n    int diameterOfBinaryTree(TreeNode* root) {\n        height(root);\n        return diameter;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(h)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Diameter = left height + right height.**\nImportant:\n\n- Height is measured in **nodes** in the helper.\n- Diameter is measured in **edges**."
      },
      {
        "title": "Optional Dry Run",
        "content": "For:\n\n```\n    1\n   / \\\n  2   3\n / \\\n4   5\n```\n\nAt node `2`:\n\n```\nleft height = 1\nright height = 1\n\ndiameter = 1 + 1 = 2\n```\n\nAt node `1`:\n\n```\nleft height = 2\nright height = 1\n\ndiameter = 2 + 1 = 3\n```\n\nAnswer:\n\n```\n3\n```\n\n---"
      }
    ]
  },
  {
    "number": 86,
    "title": "Balanced Binary Tree",
    "sections": [
      {
        "title": "Problem",
        "content": "Determine whether a binary tree is **height-balanced**.\n\nA tree is balanced if for every node:\n\n```\n|height(left) - height(right)| <= 1\n```\n\n### Example 1\n\n```\n    3\n   / \\\n  9  20\n     / \\\n    15  7\n\nOutput: true\n```\n\n### Example 2\n\n```\n    1\n   /\n  2\n /\n3\n\nOutput: false\n```"
      },
      {
        "title": "Approach",
        "content": "Use bottom-up DFS.\n\nInstead of repeatedly calculating heights, return:\n\n- Actual height if balanced.\n- `-1` if subtree is unbalanced.\nThis avoids repeated work."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Recursively find left height.\n2. If left subtree is unbalanced ?   return `-1`.\n3. Find right height.\n4. If right subtree is unbalanced ?   return `-1`.\n5. If height difference > 1 ?   return `-1`.\n6. Otherwise return current height."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int checkHeight(TreeNode* node) {\n        if (node == nullptr)\n            return 0;\n\n        int leftHeight = checkHeight(node->left);\n\n        // Left subtree is unbalanced\n        if (leftHeight == -1)\n            return -1;\n\n        int rightHeight = checkHeight(node->right);\n\n        // Right subtree is unbalanced\n        if (rightHeight == -1)\n            return -1;\n\n        // Current node is unbalanced\n        if (abs(leftHeight - rightHeight) > 1)\n            return -1;\n\n        // Return height of current subtree\n        return 1 + max(leftHeight, rightHeight);\n    }\n\n    bool isBalanced(TreeNode* root) {\n        return checkHeight(root) != -1;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(h)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Balanced Tree = height difference ?0? 1 at every node.**\nOptimization:\n\n```\nbalanced ?   return height\nunbalanced ?   return -1\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "For:\n\n```\n    1\n   /\n  2\n /\n3\n```\n\nNode `3`:\n\n```\nheight = 1\n```\n\nNode `2`:\n\n```\nleft = 1\nright = 0\nheight = 2\n```\n\nNode `1`:\n\n```\nleft = 2\nright = 0\ndifference = 2\n```\n\nTherefore:\n\n```\nfalse\n```\n\n---"
      }
    ]
  },
  {
    "number": 87,
    "title": "Lowest Common Ancestor of a Binary Tree",
    "sections": [
      {
        "title": "Problem",
        "content": "Given a **general binary tree** and two nodes `p` and `q`, find their Lowest Common Ancestor.\n\nUnlike a BST, there is **no ordering property** to exploit.\n\n### Example 1\n\n```\n        3\n       / \\\n      5   1\n     / \\ / \\\n    6  2 0  8\n      / \\\n     7   4\n\np = 5, q = 1\n\nOutput: 3\n```\n\n### Example 2\n\n```\n        3\n       / \\\n      5   1\n     / \\\n    6   2\n       / \\\n      7   4\n\np = 5, q = 4\n\nOutput: 5\n```"
      },
      {
        "title": "Approach",
        "content": "Use recursive DFS.\n\nFor each node:\n\n- If node is `nullptr`, return `nullptr`.\n- If node is `p` or `q`, return the node.\n- Search left and right.\n- If both sides return a node ?   current node is LCA.\n- Otherwise return whichever side contains a target."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Base case:\n- `nullptr` ?   return `nullptr`\n- current node is `p` or `q` ?   return current node\n2. Recursively search left subtree.\n3. Recursively search right subtree.\n4. If both are non-null ?   current node is LCA.\n5. Otherwise return the non-null result."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    TreeNode* lowestCommonAncestor(TreeNode* root,\n                                   TreeNode* p,\n                                   TreeNode* q) {\n        // Base case\n        if (root == nullptr || root == p || root == q)\n            return root;\n\n        TreeNode* left = lowestCommonAncestor(root->left, p, q);\n        TreeNode* right = lowestCommonAncestor(root->right, p, q);\n\n        // Targets found in different subtrees\n        if (left != nullptr && right != nullptr)\n            return root;\n\n        // Return whichever side contains a target\n        return left != nullptr ? left : right;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(h)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Binary Tree LCA = DFS + left result + right result.**\nIf:\n\n```\nleft != NULL && right != NULL\n```\n\nthen:\n\n```\ncurrent node = LCA\n```\n\n### Important Difference\n\n```\nBST LCA ?   use ordering\nBinary Tree LCA ?   use DFS\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "For `p = 5`, `q = 1`:\n\nAt node `3`:\n\n```\nleft subtree finds 5\nright subtree finds 1\n```\n\nBoth sides return non-null.\n\nTherefore:\n\n```\nLCA = 3\n```\n\n---"
      }
    ]
  },
  {
    "number": 88,
    "title": "Binary Tree Maximum Path Sum",
    "sections": [
      {
        "title": "Problem",
        "content": "Find the maximum possible **path sum** in a binary tree.\n\nA path can start and end at any nodes, but it must follow connected parent-child edges.\n\n### Example 1\n\n```\n      1\n     / \\\n    2   3\n\nOutput: 6\n```\n\nPath:\n\n```\n2 ?   1 ?   3\n```\n\nSum:\n\n```\n2 + 1 + 3 = 6\n```\n\n### Example 2\n\n```\n      -10\n      /  \\\n     9    20\n         /  \\\n        15   7\n\nOutput: 42\n```\n\nPath:\n\n```\n15 ?   20 ?   7\n```\n\nSum:\n\n```\n15 + 20 + 7 = 42\n```"
      },
      {
        "title": "Approach",
        "content": "At each node, calculate the maximum contribution it can give to its parent:\n\n```\nnode + max(leftGain, rightGain)\n```\n\nNegative subtree contributions should be ignored:\n\n```\nmax(0, gain)\n```\n\nBut for the global answer, the path can use **both** left and right:\n\n```\nleftGain + node + rightGain\n```"
      },
      {
        "title": "Algorithm / Steps",
        "content": "For every node:\n\n1. Calculate left gain.\n2. Calculate right gain.\n3. Ignore negative gains:\n```\nleft = max(0, left)\nright = max(0, right)\n```\n4. Calculate path passing through current node:\n```\nleft + node + right\n```\n5. Update global maximum.\n6. Return the best one-sided path:\n```\nnode + max(left, right)\n```"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int maxSum = INT_MIN;\n\n    int maxGain(TreeNode* node) {\n        if (node == nullptr)\n            return 0;\n\n        // Ignore negative contributions\n        int leftGain = max(0, maxGain(node->left));\n        int rightGain = max(0, maxGain(node->right));\n\n        // Best path passing through current node\n        int currentPath = node->val + leftGain + rightGain;\n\n        maxSum = max(maxSum, currentPath);\n\n        // Parent can only use one side\n        return node->val + max(leftGain, rightGain);\n    }\n\n    int maxPathSum(TreeNode* root) {\n        maxGain(root);\n        return maxSum;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(h)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "Remember the two different values:\n\n### Global answer\n\n```\nnode + left + right\n```\n\nCan use **both sides**.\n\n### Return to parent\n\n```\nnode + max(left, right)\n```\n\nCan use **only one side**.\n\n> This distinction is the key to Maximum Path Sum."
      },
      {
        "title": "Optional Dry Run",
        "content": "For:\n\n```\n    1\n   / \\\n  2   3\n```\n\nAt node `2`:\n\n```\ngain = 2\n```\n\nAt node `3`:\n\n```\ngain = 3\n```\n\nAt node `1`:\n\n```\nleft = 2\nright = 3\n\ncurrentPath = 2 + 1 + 3\n            = 6\n```\n\nAnswer:\n\n```\n6\n```\n\n---"
      }
    ]
  },
  {
    "number": 89,
    "title": "Serialize and Deserialize Binary Tree",
    "sections": [
      {
        "title": "Problem",
        "content": "Design a system to:\n\n- **Serialize:** convert a binary tree into a string.\n- **Deserialize:** reconstruct the exact same binary tree from that string.\n\n### Example 1\n\n```\nInput tree:\n\n    1\n   / \\\n  2   3\n     / \\\n    4   5\n\nSerialized:\n\"1,2,#,#,3,4,#,#,5,#,#\"\n\nDeserialize ?   original tree\n```\n\n### Example 2\n\n```\nInput:\n\n    1\n   /\n  2\n\nSerialized:\n\"1,2,#,#,#\"\n```\n\nHere `#` represents `nullptr`."
      },
      {
        "title": "Approach",
        "content": "Use **preorder traversal**:\n\n```\nRoot → Left → Right\n```\n\nFor every null pointer, store a marker such as `#`.\n\nWhy?\n\nBecause without null markers, different tree structures can produce the same sequence of values.\n\nDuring deserialization, read the tokens in the same preorder order and recursively rebuild the tree."
      },
      {
        "title": "Algorithm / Steps",
        "content": "### Serialize\n\n1. If node is `nullptr`, append `#`.\n2. Otherwise append node value.\n3. Serialize left subtree.\n4. Serialize right subtree.\n\n### Deserialize\n\n1. Read the next token.\n2. If token is `#`, return `nullptr`.\n3. Create a node using the value.\n4. Recursively build its left subtree.\n5. Recursively build its right subtree.\n6. Return the node."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Codec {\npublic:\n\n    // Serialize tree using preorder traversal\n    void serializeHelper(TreeNode* node, string& result) {\n        if (node == nullptr) {\n            result += \"#,\";\n            return;\n        }\n\n        result += to_string(node->val) + \",\";\n\n        serializeHelper(node->left, result);\n        serializeHelper(node->right, result);\n    }\n\n    string serialize(TreeNode* root) {\n        string result;\n        serializeHelper(root, result);\n        return result;\n    }\n\n    // Deserialize using preorder tokens\n    TreeNode* deserializeHelper(vector<string>& tokens, int& index) {\n        string token = tokens[index++];\n\n        // Null marker\n        if (token == \"#\")\n            return nullptr;\n\n        TreeNode* node = new TreeNode(stoi(token));\n\n        node->left = deserializeHelper(tokens, index);\n        node->right = deserializeHelper(tokens, index);\n\n        return node;\n    }\n\n    TreeNode* deserialize(string data) {\n        vector<string> tokens;\n\n        // Split serialized string by commas\n        string token;\n        stringstream ss(data);\n\n        while (getline(ss, token, ',')) {\n            if (!token.empty())\n                tokens.push_back(token);\n        }\n\n        int index = 0;\n        return deserializeHelper(tokens, index);\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "Let `n` be the number of nodes.\n\n### Serialize\n\n- **Time:** `O(n)`\n- **Space:** `O(n)` for the serialized string + recursion\n\n### Deserialize\n\n- **Time:** `O(n)`\n- **Space:** `O(n)` for tokens + recursion/tree construction"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Serialize/Deserialize = traversal + NULL markers.**\nMost important idea:\n\n```\nPreorder:\nRoot ?   Left ?   Right\n\nNull ?   #\n```\n\nThe `#` markers preserve the **structure** of the tree."
      },
      {
        "title": "Optional Dry Run",
        "content": "Tree:\n\n```\n    1\n   / \\\n  2   3\n```\n\n### Serialize\n\n```\n1\n2\n#\n#\n3\n#\n#\n```\n\nString:\n\n```\n\"1,2,#,#,3,#,#,\"\n```\n\n### Deserialize\nRead:\n\n```\n1 ?   create root\n2 ?   create left child\n# ?   left of 2 = null\n# ?   right of 2 = null\n3 ?   create right child\n# ?   left of 3 = null\n# ?   right of 3 = null\n```\n\nReconstructed tree:\n\n```\n    1\n   / \\\n  2   3\n```\n\n---\n\n# ?x ? Q81? 89 Quick Revision Map\nQProblemCore PatternKey Idea**81**Validate BSTBSTRange validation**82**Kth Smallest in BSTBST + InorderInorder = sorted**83**LCA of BSTBSTUse ordering**84**Sorted Array ?   BSTBST + Divide & ConquerMiddle = root**85**Diameter of Binary TreeTree DP`leftHeight + rightHeight`**86**Balanced Binary TreeTree DPHeight difference ?0? 1**87**LCA of Binary TreeDFSLeft + Right result**88**Maximum Path SumTree DPGlobal path vs parent gain**89**Serialize/DeserializeTree TraversalPreorder + null markers\n\n### ?x? Most Important Interview Distinctions\n\n```\nBST LCA\n?   Ordering property\n\nBinary Tree LCA\n?   DFS\n\nDiameter\n?   leftHeight + rightHeight\n\nMaximum Path Sum\n?   node + leftGain + rightGain\n?   return only one side to parent\n\nKth Smallest BST\n?   Inorder traversal\n\nValidate BST\n?   Range, NOT just parent-child comparison\n\nSerialize/Deserialize\n?   Traversal + NULL markers\n```\n\nThese nine cover the **core BST and advanced-tree patterns** you should be comfortable recognizing in interviews."
      }
    ]
  },
  {
    "number": 90,
    "title": "Kth Largest Element in an Array",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nGiven an integer array `nums`, return the **kth largest element**.\n\nThe answer is based on sorted order, not the kth distinct element.\n\n### Example 1\n\n```\nInput:  nums = [3,2,1,5,6,4], k = 2\nOutput: 5\n```\n\nSorted descending:\n\n```\n[6,5,4,3,2,1]\n```\n\n### Example 2\n\n```\nInput:  nums = [3,2,3,1,2,4,5,5,6], k = 4\nOutput: 4\n```\n\n**Important:** Duplicates count as separate elements.\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use **Quickselect**.\n\nWe need the kth largest, which is equivalent to index:\n\n```\nn - k\n```\n\nin ascending order.\n\nQuickselect partitions the array around a pivot:\n\n- Elements smaller than pivot go left.\n- Larger elements go right.\n- Continue only in the partition containing the target index.\nUnlike sorting the entire array, Quickselect only processes the necessary part.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Convert kth largest to target index:\n```\ntarget = n - k\n```\n2. Choose a pivot and partition the array.\n3. Let `p` be the pivot's final position.\n4. If:\n```\np == target\n```\n\nreturn `nums[p]`.\n5. If `p < target`, search right.\n6. Otherwise, search left.\n7. Continue until target is found.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int partition(vector<int>& nums, int left, int right) {\n        // Use the last element as pivot\n        int pivot = nums[right];\n        int i = left;\n\n        for (int j = left; j < right; j++) {\n            if (nums[j] <= pivot) {\n                swap(nums[i], nums[j]);\n                i++;\n            }\n        }\n\n        // Put pivot in its final position\n        swap(nums[i], nums[right]);\n\n        return i;\n    }\n\n    int findKthLargest(vector<int>& nums, int k) {\n        int target = nums.size() - k;\n\n        int left = 0;\n        int right = nums.size() - 1;\n\n        while (left <= right) {\n            int pivotIndex = partition(nums, left, right);\n\n            if (pivotIndex == target) {\n                return nums[pivotIndex];\n            }\n            else if (pivotIndex < target) {\n                // Target is in the right part\n                left = pivotIndex + 1;\n            }\n            else {\n                // Target is in the left part\n                right = pivotIndex - 1;\n            }\n        }\n\n        return -1; // Unreachable for valid input\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "- **Average Time:** `O(n)`\n- **Worst-case Time:** `O(n²)` with consistently poor pivots.\n- **Space:** `O(1)` auxiliary space for this iterative implementation.\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Kth Largest ?   Quickselect ?   target index = `n-k`.**\nExample:\n\n```\nn = 6, k = 2\n\ntarget = 6 - 2 = 4\n```\n\nFind the element at index `4` in ascending order.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [3,2,1,5,6,4]\nk = 2\n\ntarget = 6 - 2 = 4\n```\n\nWe need index `4` in ascending order:\n\n```\n[1,2,3,4,5,6]\n         ?  \n       index 4\n```\n\nAnswer:\n\n```\n5\n```\n\n---"
      }
    ]
  },
  {
    "number": 91,
    "title": "Top K Frequent Elements",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nGiven an integer array, return the `k` most frequent elements.\n\nThe answer can be returned in any order.\n\n### Example 1\n\n```\nInput:  nums = [1,1,1,2,2,3], k = 2\nOutput: [1,2]\n```\n\n### Example 2\n\n```\nInput:  nums = [1], k = 1\nOutput: [1]\n```\n\n**Important:** The returned order does not matter.\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use:\n\n1. **Hash map** to count frequencies.\n2. **Min-heap of size `k`** to keep the top `k` frequent elements.\nFor every element:\n\n```\nfrequency ?   heap\n```\n\nIf heap size becomes greater than `k`, remove the least frequent element.\n\nAt the end, the heap contains the top `k`.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Count frequency of every number using `unordered_map`.\n2. Create a min-heap storing:\n```\n{frequency, number}\n```\n3. Insert every `(number, frequency)` pair.\n4. If heap size exceeds `k`, pop the smallest frequency.\n5. Extract all elements from the heap.\n6. Return them.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<int> topKFrequent(vector<int>& nums, int k) {\n        unordered_map<int, int> frequency;\n\n        // Count frequency of each number\n        for (int num : nums) {\n            frequency[num]++;\n        }\n\n        // Min-heap:\n        // pair = {frequency, number}\n        priority_queue<\n            pair<int, int>,\n            vector<pair<int, int>>,\n            greater<pair<int, int>>\n        > minHeap;\n\n        for (auto& [num, freq] : frequency) {\n            minHeap.push({freq, num});\n\n            // Keep only the k most frequent elements\n            if (minHeap.size() > k) {\n                minHeap.pop();\n            }\n        }\n\n        vector<int> result;\n\n        while (!minHeap.empty()) {\n            result.push_back(minHeap.top().second);\n            minHeap.pop();\n        }\n\n        return result;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "Let:\n\n- `n` = number of elements\n- `u` = number of unique elements\n- **Time:** `O(n + u log k)`\n- **Space:** `O(u + k)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Top K Frequent → HashMap + Min-Heap of size K.**\nWhy **min-heap**?\n\nBecause we want to quickly remove the **least frequent** among our current top `k`.\n\nPattern:\n\n```\ncount frequencies\n       ↓\nmin-heap size k\n       ↓\nremove smallest\n       ↓\ntop k remain\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [1,1,1,2,2,3]\nk = 2\n```\n\nFrequency:\n\n```\n1 ?   3\n2 ?   2\n3 ?   1\n```\n\nHeap:\n\n```\ninsert (3,1)\ninsert (2,2)\n\nheap size = 2\n```\n\nInsert `(1,3)`:\n\n```\nheap size = 3\n?   remove frequency 1\n```\n\nRemaining:\n\n```\n1 ?   3\n2 ?   2\n```\n\nAnswer:\n\n```\n[1,2]\n```\n\n---"
      }
    ]
  },
  {
    "number": 92,
    "title": "K Closest Points to Origin",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nGiven points on a 2D plane, return the `k` points closest to the origin `(0,0)`.\n\nDistance is:\n\n```\nx² + y²\n```\n\nWe don't need the square root because comparing squared distances gives the same ordering.\n\n### Example 1\n\n```\nInput:  points = [[1,3],[-2,2]], k = 1\nOutput: [[-2,2]]\n```\n\nDistances:\n\n```\n[1,3]  ?   1² + 3² = 10\n[-2,2] ?   4 + 4 = 8\n```\n\n### Example 2\n\n```\nInput:  points = [[3,3],[5,-1],[-2,4]], k = 2\nOutput: [[3,3],[-2,4]]\n```\n\nSquared distances:\n\n```\n[3,3]   ?   18\n[5,-1]  ?   26\n[-2,4]  ?   20\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use a **max-heap of size `k`**.\n\nWhy max-heap?\n\nWe want to keep the `k` closest points.\n\nThe farthest point among our current `k` should be easy to remove.\n\nTherefore:\n\n```\nmax-heap → farthest among current k at top\n```\n\nIf heap size exceeds `k`, remove the farthest point.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Create a max-heap.\n2. For every point:\n- Calculate squared distance.\n- Insert `{distance, point}`.\n3. If heap size exceeds `k`, remove the farthest point.\n4. Extract remaining points.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {\n\n        // Max-heap:\n        // The point with the largest distance stays on top.\n        priority_queue<\n            pair<int, vector<int>>\n        > maxHeap;\n\n        for (auto& point : points) {\n            int x = point[0];\n            int y = point[1];\n\n            // Squared Euclidean distance\n            int distance = x * x + y * y;\n\n            maxHeap.push({distance, point});\n\n            // Remove the farthest point if we have more than k\n            if (maxHeap.size() > k) {\n                maxHeap.pop();\n            }\n        }\n\n        vector<vector<int>> result;\n\n        while (!maxHeap.empty()) {\n            result.push_back(maxHeap.top().second);\n            maxHeap.pop();\n        }\n\n        return result;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "Let `n` = number of points.\n\n- **Time:** `O(n log k)`\n- **Space:** `O(k)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **K closest ?   Max-Heap of size K.**\nRemember the opposite relationship:\n\n```\nTop K largest       ?   Min-Heap\nK closest/smallest  ?   Max-Heap\n```\n\nBecause we remove the **worst candidate** whenever the heap exceeds `k`.\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\npoints = [[1,3],[-2,2]]\nk = 1\n```\n\nDistances:\n\n```\n[1,3]  ?   10\n[-2,2] ?   8\n```\n\nInsert `10`.\n\nThen insert `8`:\n\n```\nheap = {10,8}\n```\n\nSize becomes `2 > 1`.\n\nRemove maximum:\n\n```\nremove 10\n```\n\nRemaining:\n\n```\n[-2,2]\n```\n\nAnswer:\n\n```\n[[-2,2]]\n```\n\n---"
      }
    ]
  },
  {
    "number": 93,
    "title": "Kth Smallest Element in a Sorted Matrix",
    "sections": [
      {
        "title": "Problem",
        "content": "### Short Problem Statement\nGiven an `n ?  n` matrix where:\n\n- Every row is sorted in ascending order.\n- Every column is sorted in ascending order.\nReturn the **kth smallest element**.\n\n### Example 1\n\n```\nInput:\n[\n  [1,5,9],\n  [10,11,13],\n  [12,13,15]\n]\n\nk = 8\n\nOutput: 13\n```\n\nSorted values:\n\n```\n1,5,9,10,11,12,13,13,15\n```\n\nThe 8th smallest is `13`.\n\n### Example 2\n\n```\nInput:\n[\n  [1,2],\n  [3,4]\n]\n\nk = 2\n\nOutput: 2\n```\n\n---"
      },
      {
        "title": "Approach",
        "content": "Use **Binary Search on Value**.\n\nThe answer lies between:\n\n```\nmatrix[0][0]\n```\n\nand\n\n```\nmatrix[n-1][n-1]\n```\n\nFor a candidate value `mid`, count how many elements are `<= mid`.\n\nIf:\n\n```\ncount >= k\n```\n\nthen `mid` could be the answer, so search smaller.\n\nOtherwise search larger.\n\nTo count efficiently, start from the **bottom-left** corner.\n\n---"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Set:\n```\nlow = matrix[0][0]\nhigh = matrix[n-1][n-1]\n```\n2. Calculate:\n```\nmid = low + (high-low)/2\n```\n3. Count elements `<= mid`:\n- Start at bottom-left.\n- If current value `<= mid`:\n- All elements above it in that column are also `<= mid`.\n- Add their count.\n- Move right.\n- Otherwise move up.\n4. If `count >= k`:\n- Search smaller values.\n5. Otherwise:\n- Search larger values.\n6. Return `low`.\n\n---"
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int countLessEqual(vector<vector<int>>& matrix, int mid) {\n        int n = matrix.size();\n\n        // Start from bottom-left\n        int row = n - 1;\n        int col = 0;\n\n        int count = 0;\n\n        while (row >= 0 && col < n) {\n            if (matrix[row][col] <= mid) {\n                // All elements above this one in the column\n                // are also <= mid.\n                count += row + 1;\n\n                // Move right to larger values\n                col++;\n            }\n            else {\n                // Current value is too large.\n                // Move up to smaller values.\n                row--;\n            }\n        }\n\n        return count;\n    }\n\n    int kthSmallest(vector<vector<int>>& matrix, int k) {\n        int n = matrix.size();\n\n        int low = matrix[0][0];\n        int high = matrix[n - 1][n - 1];\n\n        while (low < high) {\n            int mid = low + (high - low) / 2;\n\n            int count = countLessEqual(matrix, mid);\n\n            if (count >= k) {\n                // At least k elements are <= mid.\n                // Answer can be mid or smaller.\n                high = mid;\n            }\n            else {\n                // Fewer than k elements are <= mid.\n                // Need a larger value.\n                low = mid + 1;\n            }\n        }\n\n        return low;\n    }\n};\n```\n\n---"
      },
      {
        "title": "Complexity",
        "content": "For an `n ?  n` matrix:\n\n- Binary search over value range: `O(log(max-min))`\n- Counting elements for each `mid`: `O(n)`\nTherefore:\n\n- **Time:** `O(n log(maxValue - minValue))`\n- **Space:** `O(1)`\n\n---"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Sorted Matrix + kth smallest ?   Binary Search on Value.**\nThe critical helper is:\n\n```\ncount elements <= mid\n```\n\nThen:\n\n```\ncount >= k ?   go LEFT\ncount < k  ?   go RIGHT\n```\n\nAnd for counting:\n\n```\nStart bottom-left\n?  \ntoo large ?   move UP\nsmall enough ?   move RIGHT\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "Given:\n\n```\n[\n [1,5,9],\n [10,11,13],\n [12,13,15]\n]\n\nk = 8\n```\n\nSearch range:\n\n```\nlow = 1\nhigh = 15\n```\n\nSuppose:\n\n```\nmid = 8\n```\n\nCount elements `<= 8`:\n\n```\n1, 5\n```\n\nCount = `2`.\n\nSince:\n\n```\n2 < 8\n```\n\nwe need a larger value.\n\nSearch right.\n\nEventually the binary search reaches:\n\n```\n13\n```\n\nCount elements `<= 13`:\n\n```\n1,5,9,10,11,12,13,13\n```\n\nCount = `8`.\n\nSo `13` is sufficient.\n\nThe minimum value satisfying `count >= 8` is:\n\n```\n13\n```\n\n---\n\n# ?x ? Top K & Selection ?  Pattern Revision\n#ProblemMain PatternData Structure / TechniqueKey Idea90Kth Largest ElementSelectionQuickselectTarget index = `n-k`91Top K FrequentTop KMin-Heap + HashMapKeep K highest frequencies92K Closest PointsTop KMax-HeapKeep K smallest distances93Kth Smallest Sorted MatrixSelectionBinary Search on ValueCount `<= mid`\n\n### ?x? Heap Rule You Must Remember\n\n```\nWant K LARGEST\n        ?  \nUse MIN-HEAP\n        ?  \nRemove smallest\n```\n\n```\nWant K SMALLEST / CLOSEST\n        ?  \nUse MAX-HEAP\n        ?  \nRemove largest\n```\n\n### Selection Rule\n\n```\nKth element\n    ?  \n    ? S? ? ? Unsorted array\n    ?        ?  ? ? ? Quickselect\n    ?  \n    ?  ? ? ? Sorted matrix\n           ?  ? ? ? Binary Search on Value\n```\n\nDon't blindly sort every **Kth/top-K** problem. That's the lazy approach interviewers expect you to improve: identify whether **Quickselect, Heap, or Binary Search on Answer/Value** gives you a better solution."
      }
    ]
  },
  {
    "number": 97,
    "title": "Subsets",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an integer array `nums` containing unique elements, return **all possible subsets**.\n\n### Example 1\n\n```\nInput: [1,2,3]\n\nOutput:\n[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]\n```\n\n### Example 2\n\n```\nInput: [0]\n\nOutput:\n[[],[0]]\n```"
      },
      {
        "title": "Approach",
        "content": "Use **backtracking**.\n\nAt every index, we have two choices:\n\n```\nTake the element\nDon't take the element\n```\n\nAlternatively, use a backtracking loop that adds each possible next element."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Add the current subset to the answer.\n2. Iterate from `start` to the end.\n3. Choose `nums[i]`.\n4. Add it to the current subset.\n5. Recursively generate remaining subsets.\n6. Remove it to backtrack."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<vector<int>> ans;\n    vector<int> current;\n\n    void backtrack(vector<int>& nums, int start) {\n        // Every current selection is a valid subset\n        ans.push_back(current);\n\n        for (int i = start; i < nums.size(); i++) {\n            // Choose\n            current.push_back(nums[i]);\n\n            // Explore\n            backtrack(nums, i + 1);\n\n            // Undo choice\n            current.pop_back();\n        }\n    }\n\n    vector<vector<int>> subsets(vector<int>& nums) {\n        backtrack(nums, 0);\n        return ans;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "There are `2^n` subsets.\n\n- **Time:** `O(n ?  2^n)`\n- **Space:** `O(n)` recursion/current path, excluding output"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Subsets ?   choose or skip each element.**\nKey pattern:\n\n```\nChoose ?   Recursive Call ?   Undo\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "For `[1,2]`:\n\n```\n[]\n? S? ? ? [1]\n?     ?  ? ? ? [1,2]\n?  ? ? ? [2]\n```\n\nAnswer:\n\n```\n[], [1], [1,2], [2]\n```\n\n---"
      }
    ]
  },
  {
    "number": 98,
    "title": "Subsets II",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an integer array that **may contain duplicates**, return all possible subsets without duplicate subsets.\n\n### Example 1\n\n```\nInput: [1,2,2]\n\nOutput:\n[[],[1],[2],[1,2],[2,2],[1,2,2]]\n```\n\n### Example 2\n\n```\nInput: [0,0]\n\nOutput:\n[[],[0],[0,0]]\n```"
      },
      {
        "title": "Approach",
        "content": "Same backtracking as Subsets, but:\n\n1. Sort the array.\n2. Skip duplicate elements at the **same recursion level**.\n\n```\nif (i > start && nums[i] == nums[i - 1])\n    continue;\n```"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Sort `nums`.\n2. Add current subset to answer.\n3. Iterate from `start`.\n4. Skip duplicates at the same level.\n5. Choose current element.\n6. Recurse.\n7. Backtrack."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<vector<int>> ans;\n    vector<int> current;\n\n    void backtrack(vector<int>& nums, int start) {\n        ans.push_back(current);\n\n        for (int i = start; i < nums.size(); i++) {\n            // Skip duplicate choices at the same level\n            if (i > start && nums[i] == nums[i - 1])\n                continue;\n\n            current.push_back(nums[i]);\n\n            backtrack(nums, i + 1);\n\n            current.pop_back();\n        }\n    }\n\n    vector<vector<int>> subsetsWithDup(vector<int>& nums) {\n        sort(nums.begin(), nums.end());\n\n        backtrack(nums, 0);\n\n        return ans;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n ?  2^n)` in the worst case\n- **Space:** `O(n)` excluding output"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Subsets II = Subsets + sort + skip duplicates.**\nMost important line:\n\n```\nif (i > start && nums[i] == nums[i - 1])\n    continue;\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "```\nnums = [1,2,2]\n```\n\nAt the same level:\n\n```\n1 ?   choose\n2 ?   choose\n2 ?   skip duplicate\n```\n\nBut after choosing the first `2`, the second `2` can still be selected:\n\n```\n[2,2]\n```\n\nThat's why the condition is `i > start`, not simply `nums[i] == nums[i-1]`.\n\n---"
      }
    ]
  },
  {
    "number": 99,
    "title": "Permutations",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an array of distinct integers, return all possible permutations.\n\n### Example 1\n\n```\nInput: [1,2,3]\n\nOutput:\n[\n [1,2,3],\n [1,3,2],\n [2,1,3],\n [2,3,1],\n [3,1,2],\n [3,2,1]\n]\n```\n\n### Example 2\n\n```\nInput: [0,1]\n\nOutput:\n[[0,1],[1,0]]\n```"
      },
      {
        "title": "Approach",
        "content": "Unlike subsets, **order matters**.\n\nAt every position, choose one unused element.\n\nUse a `used` array to track selected elements.\n\nDraw 1 of 3Available134Arrangement2\n\n\\({}^{4}P_3=\\frac{4!}{(4-3)!}=24\\)\nThis run constructs the arrangement 2, 4, and 3. Drawing the same tokens in another order gives a different permutation.\n\nOptions\n\nDraws\n\nGive feedback"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. If current permutation size equals `n`, add it.\n2. Iterate through all elements.\n3. Skip already-used elements.\n4. Choose an element.\n5. Mark it used.\n6. Recurse.\n7. Unmark and remove it."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<vector<int>> ans;\n    vector<int> current;\n    vector<bool> used;\n\n    void backtrack(vector<int>& nums) {\n        // Complete permutation\n        if (current.size() == nums.size()) {\n            ans.push_back(current);\n            return;\n        }\n\n        for (int i = 0; i < nums.size(); i++) {\n            if (used[i])\n                continue;\n\n            // Choose\n            used[i] = true;\n            current.push_back(nums[i]);\n\n            // Explore\n            backtrack(nums);\n\n            // Undo\n            current.pop_back();\n            used[i] = false;\n        }\n    }\n\n    vector<vector<int>> permute(vector<int>& nums) {\n        used.resize(nums.size(), false);\n\n        backtrack(nums);\n\n        return ans;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "There are `n!` permutations.\n\n- **Time:** `O(n ?  n!)`\n- **Space:** `O(n)` excluding output"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Permutation ?   order matters ?   choose any unused element.**\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  },
  {
    "number": 100,
    "title": "Permutations II",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an array that may contain duplicates, return all **unique permutations**.\n\n### Example 1\n\n```\nInput: [1,1,2]\n\nOutput:\n[\n [1,1,2],\n [1,2,1],\n [2,1,1]\n]\n```\n\n### Example 2\n\n```\nInput: [1,2,2]\n\nOutput:\n[\n [1,2,2],\n [2,1,2],\n [2,2,1]\n]\n```"
      },
      {
        "title": "Approach",
        "content": "Use backtracking with:\n\n1. Sort the array.\n2. Skip duplicate elements at the **same recursion level**.\n3. Use a `used` array.\nThe duplicate condition is:\n\n```\nif (i > 0 && nums[i] == nums[i-1] && !used[i-1])\n    continue;\n```"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Sort `nums`.\n2. If permutation is complete, add it.\n3. Iterate through elements.\n4. Skip already-used elements.\n5. Skip duplicate choices at the same level.\n6. Choose ?   recurse ?   undo."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<vector<int>> ans;\n    vector<int> current;\n    vector<bool> used;\n\n    void backtrack(vector<int>& nums) {\n        if (current.size() == nums.size()) {\n            ans.push_back(current);\n            return;\n        }\n\n        for (int i = 0; i < nums.size(); i++) {\n            if (used[i])\n                continue;\n\n            // Avoid duplicate permutations\n            // when the previous identical element\n            // has not been used at this level.\n            if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1])\n                continue;\n\n            used[i] = true;\n            current.push_back(nums[i]);\n\n            backtrack(nums);\n\n            current.pop_back();\n            used[i] = false;\n        }\n    }\n\n    vector<vector<int>> permuteUnique(vector<int>& nums) {\n        sort(nums.begin(), nums.end());\n\n        used.resize(nums.size(), false);\n\n        backtrack(nums);\n\n        return ans;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n ?  n!)` worst case\n- **Space:** `O(n)` excluding output"
      },
      {
        "title": "Easy Revision Note",
        "content": "```\nPermutations II\n= Permutations\n+ Sort\n+ Skip duplicate choices\n```\n\n---\n\n# ?x ? Combinations"
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  },
  {
    "number": 101,
    "title": "Combination Sum",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an array of distinct positive integers `candidates` and a target, return all unique combinations whose sum equals `target`.\n\nEach number may be used **unlimited times**.\n\n### Example 1\n\n```\nInput: candidates = [2,3,6,7], target = 7\n\nOutput:\n[[2,2,3],[7]]\n```\n\n### Example 2\n\n```\nInput: candidates = [2,3,5], target = 8\n\nOutput:\n[[2,2,2,2],[2,3,3],[3,5]]\n```"
      },
      {
        "title": "Approach",
        "content": "Backtracking.\n\nBecause an element can be reused, after choosing `nums[i]`, recurse with **the same index `i`**.\n\n```\nbacktrack(i)\n```\n\nnot:\n\n```\nbacktrack(i + 1)\n```"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. If target becomes `0`, store combination.\n2. If target becomes negative, stop.\n3. Iterate from `start`.\n4. Choose candidate.\n5. Recurse with same `i`.\n6. Backtrack."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<vector<int>> ans;\n    vector<int> current;\n\n    void backtrack(vector<int>& candidates, int start, int target) {\n        if (target == 0) {\n            ans.push_back(current);\n            return;\n        }\n\n        for (int i = start; i < candidates.size(); i++) {\n            if (candidates[i] > target)\n                continue;\n\n            current.push_back(candidates[i]);\n\n            // Same index because the element can be reused\n            backtrack(candidates, i, target - candidates[i]);\n\n            current.pop_back();\n        }\n    }\n\n    vector<vector<int>> combinationSum(vector<int>& candidates,\n                                       int target) {\n        sort(candidates.begin(), candidates.end());\n\n        backtrack(candidates, 0, target);\n\n        return ans;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** Exponential; commonly expressed as `O(2^target)` for bounded positive candidates, though the exact bound depends on candidate values.\n- **Space:** `O(target)` recursion depth in the worst case, excluding output."
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Combination Sum ?   unlimited reuse ?   recurse with `i`.**\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  },
  {
    "number": 102,
    "title": "Combination Sum II",
    "sections": [
      {
        "title": "Problem",
        "content": "Given candidates that may contain duplicates, find unique combinations that sum to `target`.\n\nEach element can be used **at most once**.\n\n### Example 1\n\n```\nInput: [10,1,2,7,6,1,5], target = 8\n\nOutput:\n[\n [1,1,6],\n [1,2,5],\n [1,7],\n [2,6]\n]\n```\n\n### Example 2\n\n```\nInput: [2,5,2,1,2], target = 5\n\nOutput:\n[\n [1,2,2],\n [5]\n]\n```"
      },
      {
        "title": "Approach",
        "content": "Backtracking with:\n\n- Sort the array.\n- Skip duplicates at the same recursion level.\n- Move to `i + 1` because each element can be used only once."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Sort candidates.\n2. If target is `0`, store combination.\n3. Iterate from `start`.\n4. Skip duplicate choices:\n```\nif (i > start && nums[i] == nums[i-1])\n```\n5. Choose candidate.\n6. Recurse with `i + 1`.\n7. Backtrack."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<vector<int>> ans;\n    vector<int> current;\n\n    void backtrack(vector<int>& candidates, int start, int target) {\n        if (target == 0) {\n            ans.push_back(current);\n            return;\n        }\n\n        for (int i = start; i < candidates.size(); i++) {\n            // Avoid duplicate combinations\n            if (i > start && candidates[i] == candidates[i - 1])\n                continue;\n\n            // Since array is sorted, no later value can work\n            if (candidates[i] > target)\n                break;\n\n            current.push_back(candidates[i]);\n\n            // i + 1 because each element can be used once\n            backtrack(candidates, i + 1, target - candidates[i]);\n\n            current.pop_back();\n        }\n    }\n\n    vector<vector<int>> combinationSum2(vector<int>& candidates,\n                                         int target) {\n        sort(candidates.begin(), candidates.end());\n\n        backtrack(candidates, 0, target);\n\n        return ans;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(2^n)` worst case\n- **Space:** `O(n)` excluding output"
      },
      {
        "title": "Easy Revision Note",
        "content": "```\nCombination Sum\n?   reuse allowed\n?   recurse with i\n\nCombination Sum II\n?   use once\n?   recurse with i + 1\n?   sort + skip duplicates\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  },
  {
    "number": 103,
    "title": "Letter Combinations of a Phone Number",
    "sections": [
      {
        "title": "Problem",
        "content": "Given a string containing digits `2? 9`, return all possible letter combinations represented by those digits on a phone keypad.\n\n### Example 1\n\n```\nInput: \"23\"\n\nOutput:\n[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]\n```\n\n### Example 2\n\n```\nInput: \"2\"\n\nOutput:\n[\"a\",\"b\",\"c\"]\n```"
      },
      {
        "title": "Approach",
        "content": "Map every digit to its letters.\n\nFor each digit, try every corresponding letter using backtracking."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. If digits is empty, return empty result.\n2. Map digits to letters.\n3. At each position:\n- Get letters for current digit.\n- Choose each letter.\n- Recurse to next digit.\n- Remove chosen letter.\n4. When all digits are processed, store the string."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<string> ans;\n    string current;\n\n    vector<string> keypad = {\n        \"\", \"\", \"abc\", \"def\",\n        \"ghi\", \"jkl\", \"mno\",\n        \"pqrs\", \"tuv\", \"wxyz\"\n    };\n\n    void backtrack(string& digits, int index) {\n        if (index == digits.size()) {\n            ans.push_back(current);\n            return;\n        }\n\n        string letters = keypad[digits[index] - '0'];\n\n        for (char ch : letters) {\n            current.push_back(ch);\n\n            backtrack(digits, index + 1);\n\n            current.pop_back();\n        }\n    }\n\n    vector<string> letterCombinations(string digits) {\n        if (digits.empty())\n            return {};\n\n        backtrack(digits, 0);\n\n        return ans;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "Let each digit have at most 4 letters.\n\n- **Time:** `O(4^n ?  n)`\n- **Space:** `O(n)` excluding output"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Phone combinations = one choice of letter for each digit.**\n\n---\n\n# ?x? Grid / Constraint Backtracking"
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  },
  {
    "number": 104,
    "title": "Word Search",
    "sections": [
      {
        "title": "Problem",
        "content": "Given a 2D character grid and a word, determine whether the word exists in the grid.\n\nYou can move:\n\n```\nUp / Down / Left / Right\n```\n\nA cell cannot be used more than once in the same path.\n\n### Example 1\n\n```\nInput:\n\nA B C E\nS F C S\nA D E E\n\nWord = \"ABCCED\"\n\nOutput: true\n```\n\n### Example 2\n\n```\nInput:\n\nA B C E\nS F C S\nA D E E\n\nWord = \"ABCB\"\n\nOutput: false\n```"
      },
      {
        "title": "Approach",
        "content": "Use DFS + backtracking.\n\nFor every cell matching the first character:\n\n1. Explore four directions.\n2. Temporarily mark the current cell visited.\n3. Restore it after recursion."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Iterate through every grid cell.\n2. If cell matches `word[0]`, start DFS.\n3. Check boundaries and character match.\n4. Mark cell visited.\n5. Search four directions.\n6. Restore the cell.\n7. Return true if any path matches the word."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int rows, cols;\n\n    bool dfs(vector<vector<char>>& board,\n             string& word,\n             int r,\n             int c,\n             int index) {\n\n        // Entire word found\n        if (index == word.size())\n            return true;\n\n        // Boundary check\n        if (r < 0 || r >= rows ||\n            c < 0 || c >= cols ||\n            board[r][c] != word[index]) {\n            return false;\n        }\n\n        // Mark as visited\n        char original = board[r][c];\n        board[r][c] = '#';\n\n        bool found =\n            dfs(board, word, r + 1, c, index + 1) ||\n            dfs(board, word, r - 1, c, index + 1) ||\n            dfs(board, word, r, c + 1, index + 1) ||\n            dfs(board, word, r, c - 1, index + 1);\n\n        // Backtrack\n        board[r][c] = original;\n\n        return found;\n    }\n\n    bool exist(vector<vector<char>>& board, string word) {\n        rows = board.size();\n        cols = board[0].size();\n\n        for (int r = 0; r < rows; r++) {\n            for (int c = 0; c < cols; c++) {\n                if (dfs(board, word, r, c, 0))\n                    return true;\n            }\n        }\n\n        return false;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "Let `R ?  C` be grid size and `L` be word length.\n\n- **Time:** `O(R ?  C ?  4 ?  3^(L-1))`\n- **Space:** `O(L)`\nAfter the first move, we generally have at most 3 directions because returning immediately to the previous cell is disallowed."
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Word Search = DFS on grid + mark visited + backtrack.**\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  },
  {
    "number": 105,
    "title": "N-Queens",
    "sections": [
      {
        "title": "Problem",
        "content": "Place `n` queens on an `n ?  n` chessboard so that no two queens attack each other.\n\nQueens cannot share:\n\n- Same row\n- Same column\n- Same diagonal\n\n### Example 1\n\n```\nInput: n = 4\n\nOutput:\n\n. Q . .\n. . . Q\nQ . . .\n. . Q .\n```\n\n### Example 2\n\n```\nInput: n = 1\n\nOutput:\n\nQ\n```"
      },
      {
        "title": "Approach",
        "content": "Place exactly one queen in each row.\n\nFor each row, try every column and check:\n\n```\nColumn\nMain diagonal: row - col\nAnti-diagonal: row + col\n```\n\nUse sets to check these in `O(1)`."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Start from row `0`.\n2. Try every column.\n3. Check whether column/diagonals are free.\n4. Place queen.\n5. Recurse to next row.\n6. Remove queen when backtracking."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    vector<vector<string>> ans;\n    vector<string> board;\n\n    unordered_set<int> columns;\n    unordered_set<int> diag1; // row - col\n    unordered_set<int> diag2; // row + col\n\n    int n;\n\n    void backtrack(int row) {\n        if (row == n) {\n            ans.push_back(board);\n            return;\n        }\n\n        for (int col = 0; col < n; col++) {\n            if (columns.count(col))\n                continue;\n\n            if (diag1.count(row - col))\n                continue;\n\n            if (diag2.count(row + col))\n                continue;\n\n            // Place queen\n            board[row][col] = 'Q';\n            columns.insert(col);\n            diag1.insert(row - col);\n            diag2.insert(row + col);\n\n            backtrack(row + 1);\n\n            // Remove queen\n            board[row][col] = '.';\n            columns.erase(col);\n            diag1.erase(row - col);\n            diag2.erase(row + col);\n        }\n    }\n\n    vector<vector<string>> solveNQueens(int n) {\n        this->n = n;\n        board.assign(n, string(n, '.'));\n\n        backtrack(0);\n\n        return ans;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n!)` commonly used interview bound\n- **Space:** `O(n²)` for board + `O(n)` recursion/sets"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **N-Queens = one queen per row + check column + 2 diagonals.**\nRemember:\n\n```\nrow - col ?   main diagonal\nrow + col ?   anti-diagonal\n```\n\n---\n\n# ?x?  Dynamic Programming"
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  },
  {
    "number": 106,
    "title": "Climbing Stairs",
    "sections": [
      {
        "title": "Problem",
        "content": "You are climbing a staircase with `n` steps.\n\nAt each step, you can climb either:\n\n```\n1 step\nor\n2 steps\n```\n\nReturn the number of distinct ways to reach the top.\n\n### Example 1\n\n```\nInput: n = 2\nOutput: 2\n\nWays:\n1 + 1\n2\n```\n\n### Example 2\n\n```\nInput: n = 3\nOutput: 3\n\nWays:\n1+1+1\n1+2\n2+1\n```"
      },
      {
        "title": "Approach",
        "content": "To reach step `n`, the last move must come from:\n\n```\nn - 1\nor\nn - 2\n```\n\nTherefore:\n\n```\ndp[n] = dp[n-1] + dp[n-2]\n```\n\nThis is Fibonacci-like."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. `ways(1) = 1`\n2. `ways(2) = 2`\n3. Keep the previous two values.\n4. Calculate the next value.\n5. Return it."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int climbStairs(int n) {\n        if (n <= 2)\n            return n;\n\n        int prev2 = 1; // ways to reach step 1\n        int prev1 = 2; // ways to reach step 2\n\n        for (int i = 3; i <= n; i++) {\n            int current = prev1 + prev2;\n\n            prev2 = prev1;\n            prev1 = current;\n        }\n\n        return prev1;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Climbing Stairs = Fibonacci pattern.**\n\n```\ndp[i] = dp[i-1] + dp[i-2]\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  },
  {
    "number": 107,
    "title": "Min Cost Climbing Stairs",
    "sections": [
      {
        "title": "Problem",
        "content": "You are given a `cost` array where `cost[i]` is the cost of stepping on stair `i`.\n\nYou can climb either 1 or 2 steps.\n\nFind the minimum cost to reach the top.\n\n### Example 1\n\n```\nInput: [10,15,20]\n\nOutput: 15\n```\n\nTake:\n\n```\nstep 1 ?   top\n```\n\nCost = `15`.\n\n### Example 2\n\n```\nInput: [1,100,1,1,1,100,1,1,100,1]\n\nOutput: 6\n```"
      },
      {
        "title": "Approach",
        "content": "To reach step `i`, we can come from:\n\n```\ni - 1\nor\ni - 2\n```\n\nTherefore:\n\n```\ndp[i] = cost[i] + min(dp[i-1], dp[i-2])\n```\n\nThe top is one position beyond the last stair."
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Start with:\n```\nprev2 = cost[0]\nprev1 = cost[1]\n```\n2. Calculate minimum cost for each subsequent stair.\n3. The final answer is:\n```\nmin(cost[n-1], cost[n-2])\n```\n\nusing the optimized interpretation where reaching the top means taking one final step beyond either of the last two positions."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int minCostClimbingStairs(vector<int>& cost) {\n        int n = cost.size();\n\n        int prev2 = cost[0];\n        int prev1 = cost[1];\n\n        for (int i = 2; i < n; i++) {\n            int current = cost[i] + min(prev1, prev2);\n\n            prev2 = prev1;\n            prev1 = current;\n        }\n\n        // We can reach the top from either of the last two stairs\n        return min(prev1, prev2);\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **Min Cost Stairs = minimum of previous two costs + current cost.**\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  },
  {
    "number": 108,
    "title": "House Robber",
    "sections": [
      {
        "title": "Problem",
        "content": "Given an array where `nums[i]` represents money in house `i`, maximize the money you can rob.\n\nYou cannot rob two adjacent houses.\n\n### Example 1\n\n```\nInput: [1,2,3,1]\n\nOutput: 4\n\nRob houses:\n1 + 3 = 4\n```\n\n### Example 2\n\n```\nInput: [2,7,9,3,1]\n\nOutput: 12\n\nRob:\n2 + 9 + 1 = 12\n```"
      },
      {
        "title": "Approach",
        "content": "At every house, choose:\n\n```\nRob current\nOR\nSkip current\n```\n\nIf we rob current, we must skip previous.\n\n```\ndp[i] = max(\n    dp[i-1],\n    dp[i-2] + nums[i]\n)\n```"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. Keep maximum money from previous two positions.\n2. For each house:\n- Skip ?   `prev1`\n- Rob ?   `prev2 + nums[i]`\n3. Take maximum.\n4. Shift variables."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int rob(vector<int>& nums) {\n        int prev2 = 0; // Best before previous house\n        int prev1 = 0; // Best up to previous house\n\n        for (int money : nums) {\n            // Either skip current house or rob it\n            int current = max(prev1, prev2 + money);\n\n            prev2 = prev1;\n            prev1 = current;\n        }\n\n        return prev1;\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **House Robber = take or skip.**\nCore recurrence:\n\n```\nmax(skip, rob)\n=\nmax(prev1, prev2 + current)\n```\n\n---"
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  },
  {
    "number": 109,
    "title": "House Robber II",
    "sections": [
      {
        "title": "Problem",
        "content": "Houses are arranged in a **circle**.\n\nYou cannot rob two adjacent houses.\n\nBecause the first and last houses are adjacent, you cannot rob both.\n\n### Example 1\n\n```\nInput: [2,3,2]\n\nOutput: 3\n```\n\nRob only the middle house.\n\n### Example 2\n\n```\nInput: [1,2,3,1]\n\nOutput: 4\n```\n\nRob houses with values:\n\n```\n1 + 3 = 4\n```"
      },
      {
        "title": "Approach",
        "content": "Since first and last houses are adjacent, there are two cases:\n\n```\nCase 1: Exclude last house\n        ?   rob [0 ... n-2]\n\nCase 2: Exclude first house\n        ?   rob [1 ... n-1]\n```\n\nAnswer:\n\n```\nmax(case1, case2)\n```"
      },
      {
        "title": "Algorithm / Steps",
        "content": "1. If only one house ?   return its money.\n2. Calculate normal House Robber on `[0, n-2]`.\n3. Calculate normal House Robber on `[1, n-1]`.\n4. Return maximum."
      },
      {
        "title": "C++ Code",
        "content": "```\nclass Solution {\npublic:\n    int robRange(vector<int>& nums, int start, int end) {\n        int prev2 = 0;\n        int prev1 = 0;\n\n        for (int i = start; i <= end; i++) {\n            int current = max(prev1, prev2 + nums[i]);\n\n            prev2 = prev1;\n            prev1 = current;\n        }\n\n        return prev1;\n    }\n\n    int rob(vector<int>& nums) {\n        int n = nums.size();\n\n        if (n == 1)\n            return nums[0];\n\n        // Case 1: Exclude last house\n        int case1 = robRange(nums, 0, n - 2);\n\n        // Case 2: Exclude first house\n        int case2 = robRange(nums, 1, n - 1);\n\n        return max(case1, case2);\n    }\n};\n```"
      },
      {
        "title": "Complexity",
        "content": "- **Time:** `O(n)`\n- **Space:** `O(1)`"
      },
      {
        "title": "Easy Revision Note",
        "content": "> **House Robber II = House Robber twice.**\nCircle ?   break into two linear cases:\n\n```\n[0 ... n-2]\n      OR\n[1 ... n-1]\n```\n\n---\n\n# ?x ? Q97? 109 Pattern Revision\nQProblemCore PatternMust Remember**97**SubsetsBacktrackingChoose / skip**98**Subsets IIBacktrackingSort + skip duplicates**99**PermutationsBacktrackingChoose unused**100**Permutations IIBacktrackingSort + duplicate control**101**Combination SumBacktrackingReuse ?   `i`**102**Combination Sum IIBacktrackingOnce ?   `i+1`**103**Phone Letter CombinationsBacktrackingOne letter per digit**104**Word SearchGrid DFSMark + explore + restore**105**N-QueensConstraint BacktrackingColumn + 2 diagonals**106**Climbing Stairs1D DPFibonacci**107**Min Cost Climbing Stairs1D DPMin of previous 2**108**House Robber1D DPRob vs skip**109**House Robber II1D DPTwo linear cases\n\n### ?x? The patterns you should recognize instantly\n\n```\nSUBSETS\n?   start index\n?   choose + recurse + undo\n\nPERMUTATIONS\n?   used[]\n?   choose any unused element\n\nDUPLICATES\n?   sort first\n?   skip duplicate at same level\n\nCOMBINATION SUM\n?   unlimited reuse ?   recurse(i)\n\nCOMBINATION SUM II\n?   use once ?   recurse(i+1)\n\nGRID BACKTRACKING\n?   mark visited\n?   DFS\n?   restore\n\nN-QUEENS\n?   row + column + diagonals\n\nCLIMBING STAIRS\n?   previous 2 states\n\nHOUSE ROBBER\n?   max(skip, rob)\n\nHOUSE ROBBER II\n?   exclude first OR exclude last\n```"
      },
      {
        "title": "Optional Dry Run",
        "content": "No dry run was included in the supplied notes."
      }
    ]
  }
];
