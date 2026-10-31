function addAdditionalQuestion(number, title, problem, approach, steps, code, complexity, note, dryRun) {
  questionContent.push({
    number,
    title,
    sections: [
      { title: "Problem", content: problem },
      { title: "Approach", content: approach },
      { title: "Algorithm / Steps", content: steps },
      { title: "C++ Code", content: "```\n" + code.trim() + "\n```" },
      { title: "Complexity", content: complexity },
      { title: "Easy Revision Note", content: note },
      { title: "Optional Dry Run", content: dryRun }
    ]
  });
}

addAdditionalQuestion(113, "Number of 1 Bits",
  "Given a 32-bit unsigned integer n, return the number of set bits in its binary representation.\n\nExample: n = 11 (binary 1011) returns 3.",
  "Brian Kernighan's bit trick clears the lowest set bit each iteration. The number of iterations equals the number of set bits.",
  "1. Set count to zero.\n2. While n is nonzero, replace it with n & (n - 1) and increment count.\n3. Return count.",
  String.raw`class Solution {
public:
    int hammingWeight(uint32_t n) {
        int count = 0;
        while (n != 0) {
            n &= (n - 1);
            ++count;
        }
        return count;
    }
};`,
  "- Time: O(number of set bits), at most 32 iterations.\n- Space: O(1).",
  "> Clear the lowest set bit with n &= n - 1; count each clear.",
  "For 1011, the successive values are 1010, 1000, and 0000, so the count is 3."
);

addAdditionalQuestion(114, "Counting Bits",
  "Given a non-negative integer n, return an array answer where answer[i] is the number of set bits in i for every 0 <= i <= n.\n\nExample: n = 5 returns [0,1,1,2,1,2].",
  "Removing the least significant bit maps i to i & (i - 1), which is smaller than i. Thus bits[i] = bits[i >> 1] + (i & 1).",
  "1. Allocate n + 1 zeroes.\n2. For each i from 1 through n, compute bits[i] from the already computed bits[i >> 1].\n3. Return the array.",
  String.raw`class Solution {
public:
    vector<int> countBits(int n) {
        vector<int> bits(n + 1, 0);
        for (int i = 1; i <= n; ++i) {
            bits[i] = bits[i >> 1] + (i & 1);
        }
        return bits;
    }
};`,
  "- Time: O(n).\n- Space: O(n) for the returned array.",
  "> Drop the last binary bit: bits[i] = bits[i >> 1] + (i & 1).",
  "For i = 5 (101), bits[5] = bits[2] + 1 = 1 + 1 = 2."
);

addAdditionalQuestion(115, "Reverse Bits",
  "Reverse the bits of a 32-bit unsigned integer and return the resulting 32-bit unsigned integer.\n\nExample: 00000010100101000001111010011100 becomes 00111001011110000010100101000000.",
  "Build the answer one bit at a time. Shift the answer left and append the current lowest bit of the input.",
  "1. Repeat exactly 32 times.\n2. Shift the result left by one and append n & 1.\n3. Shift n right by one.\n4. Return the result.",
  String.raw`class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        uint32_t result = 0;
        for (int i = 0; i < 32; ++i) {
            result = (result << 1) | (n & 1U);
            n >>= 1;
        }
        return result;
    }
};`,
  "- Time: O(1), exactly 32 iterations.\n- Space: O(1).",
  "> Shift the answer left, append the input's lowest bit, then shift the input right.",
  "After the first iteration, the input's least significant bit becomes the result's most significant bit."
);

addAdditionalQuestion(116, "Sum of Two Integers",
  "Return the sum of two integers without using the + or - operators.\n\nExample: a = 2, b = 3 returns 5.",
  "XOR adds each bit without carry. AND followed by a left shift computes the carry. Repeat until no carry remains.",
  "1. Treat both values as 32-bit unsigned bit patterns.\n2. Compute carry as (a & b) shifted left once.\n3. Replace a with a XOR b and b with the carry.\n4. Return when b becomes zero.",
  String.raw`class Solution {
public:
    int getSum(int a, int b) {
        uint32_t x = static_cast<uint32_t>(a);
        uint32_t y = static_cast<uint32_t>(b);
        while (y != 0) {
            uint32_t carry = (x & y) << 1;
            x ^= y;
            y = carry;
        }
        return static_cast<int>(x);
    }
};`,
  "- Time: O(1), at most 32 bit iterations.\n- Space: O(1).",
  "> XOR gives the partial sum; shifted AND gives the carry.",
  "For 2 (0010) and 3 (0011), XOR gives 0001 and carry gives 0100; the next round gives 0101, or 5."
);

addAdditionalQuestion(117, "Rotate Image ★",
  "Given an n x n matrix, rotate it 90 degrees clockwise in place.\n\nExample: [[1,2,3],[4,5,6],[7,8,9]] becomes [[7,4,1],[8,5,2],[9,6,3]].",
  "Transpose the square matrix, then reverse each row. Both operations together produce a clockwise rotation.",
  "1. Swap matrix[row][col] with matrix[col][row] above the diagonal.\n2. Reverse every row.\n3. The matrix is updated in place.",
  String.raw`class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        int n = static_cast<int>(matrix.size());
        for (int row = 0; row < n; ++row) {
            for (int col = row + 1; col < n; ++col) {
                swap(matrix[row][col], matrix[col][row]);
            }
        }
        for (auto& row : matrix) {
            reverse(row.begin(), row.end());
        }
    }
};`,
  "- Time: O(n^2).\n- Auxiliary space: O(1).",
  "> Clockwise rotation = transpose, then reverse each row.",
  "Transpose [[1,2],[3,4]] to [[1,3],[2,4]], then reverse rows to get [[3,1],[4,2]]."
);

addAdditionalQuestion(118, "Spiral Matrix ★",
  "Return all elements of an m x n matrix in clockwise spiral order.\n\nExample: [[1,2,3],[4,5,6],[7,8,9]] returns [1,2,3,6,9,8,7,4,5].",
  "Maintain the current top, bottom, left, and right boundaries. Traverse one edge at a time and shrink its boundary.",
  "1. Traverse the top row, then increment top.\n2. Traverse the right column, then decrement right.\n3. If rows remain, traverse the bottom row in reverse and decrement bottom.\n4. If columns remain, traverse the left column upward and increment left.\n5. Repeat while both boundaries are valid.",
  String.raw`class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        vector<int> result;
        int top = 0, bottom = static_cast<int>(matrix.size()) - 1;
        int left = 0, right = static_cast<int>(matrix[0].size()) - 1;
        while (top <= bottom && left <= right) {
            for (int col = left; col <= right; ++col)
                result.push_back(matrix[top][col]);
            ++top;
            for (int row = top; row <= bottom; ++row)
                result.push_back(matrix[row][right]);
            --right;
            if (top <= bottom) {
                for (int col = right; col >= left; --col)
                    result.push_back(matrix[bottom][col]);
                --bottom;
            }
            if (left <= right) {
                for (int row = bottom; row >= top; --row)
                    result.push_back(matrix[row][left]);
                ++left;
            }
        }
        return result;
    }
};`,
  "- Time: O(mn).\n- Space: O(1) auxiliary, excluding the result.",
  "> Traverse the four edges, shrinking one boundary after each edge.",
  "For a 3 x 3 matrix, visit the outside ring 1,2,3,6,9,8,7,4, then the center 5."
);

addAdditionalQuestion(119, "Set Matrix Zeroes",
  "If an element of an m x n matrix is zero, set its entire row and column to zero in place.\n\nExample: [[1,1,1],[1,0,1],[1,1,1]] becomes [[1,0,1],[0,0,0],[1,0,1]].",
  "Use the first row and first column as marker storage. Keep separate flags for whether either of those marker areas originally contains zero.",
  "1. Record whether the first row and first column contain zero.\n2. For each interior zero, mark its row in matrix[row][0] and column in matrix[0][col].\n3. Zero interior cells whose row or column is marked.\n4. Zero the first row and column if their saved flags require it.",
  String.raw`class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        int rows = static_cast<int>(matrix.size());
        int cols = static_cast<int>(matrix[0].size());
        bool firstRowZero = false, firstColZero = false;
        for (int col = 0; col < cols; ++col)
            firstRowZero |= matrix[0][col] == 0;
        for (int row = 0; row < rows; ++row)
            firstColZero |= matrix[row][0] == 0;
        for (int row = 1; row < rows; ++row) {
            for (int col = 1; col < cols; ++col) {
                if (matrix[row][col] == 0) {
                    matrix[row][0] = 0;
                    matrix[0][col] = 0;
                }
            }
        }
        for (int row = 1; row < rows; ++row) {
            for (int col = 1; col < cols; ++col) {
                if (matrix[row][0] == 0 || matrix[0][col] == 0)
                    matrix[row][col] = 0;
            }
        }
        if (firstRowZero)
            fill(matrix[0].begin(), matrix[0].end(), 0);
        if (firstColZero) {
            for (int row = 0; row < rows; ++row)
                matrix[row][0] = 0;
        }
    }
};`,
  "- Time: O(mn).\n- Auxiliary space: O(1).",
  "> Mark affected rows and columns in the first row and column; save their original zero states first.",
  "A zero at (1,1) marks row 1 and column 1; those markers zero the matching row and column on the second pass."
);

addAdditionalQuestion(120, "Valid Sudoku",
  "Determine whether a partially filled 9 x 9 Sudoku board is valid. Each row, column, and 3 x 3 box must contain no repeated digit from 1 to 9. Empty cells do not invalidate the board.",
  "Track seen digits independently for every row, column, and 3 x 3 box. A digit's box index is (row / 3) * 3 + col / 3.",
  "1. Scan every cell and skip '.'.\n2. Convert the digit to an index from 0 to 8.\n3. If it is already seen in its row, column, or box, return false.\n4. Mark it in all three places and return true after the scan.",
  String.raw`class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        bool rows[9][9] = {};
        bool cols[9][9] = {};
        bool boxes[9][9] = {};
        for (int row = 0; row < 9; ++row) {
            for (int col = 0; col < 9; ++col) {
                char ch = board[row][col];
                if (ch == '.') continue;
                int digit = ch - '1';
                int box = (row / 3) * 3 + col / 3;
                if (rows[row][digit] || cols[col][digit] || boxes[box][digit])
                    return false;
                rows[row][digit] = cols[col][digit] = boxes[box][digit] = true;
            }
        }
        return true;
    }
};`,
  "- Time: O(1) for a fixed 9 x 9 board.\n- Space: O(1) for fixed-size tracking tables.",
  "> For each digit, check its row, column, and box before marking all three.",
  "Cell (4,7) belongs to box (4 / 3) * 3 + (7 / 3) = 5."
);

addAdditionalQuestion(121, "Construct Binary Tree from Preorder and Inorder Traversal ★",
  "Given the preorder and inorder traversals of a binary tree with unique values, construct and return the tree.\n\nExample: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7].",
  "The next preorder value is the root. Its position in inorder splits the remaining values into left and right subtrees. An index map avoids rescanning inorder.",
  "1. Map each inorder value to its index and reset the preorder cursor.\n2. For an inorder range, take the next preorder value as its root.\n3. Recursively build the left range, then the right range.\n4. Return the root.",
  String.raw`class Solution {
    unordered_map<int, int> position;
    int preorderIndex = 0;

    TreeNode* build(vector<int>& preorder, int left, int right) {
        if (left > right) return nullptr;
        int value = preorder[preorderIndex++];
        TreeNode* root = new TreeNode(value);
        int middle = position[value];
        root->left = build(preorder, left, middle - 1);
        root->right = build(preorder, middle + 1, right);
        return root;
    }

public:
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        position.clear();
        preorderIndex = 0;
        for (int i = 0; i < static_cast<int>(inorder.size()); ++i)
            position[inorder[i]] = i;
        return build(preorder, 0, static_cast<int>(inorder.size()) - 1);
    }
};`,
  "- Time: O(n).\n- Space: O(n) for the index map, recursion, and constructed tree.",
  "> Preorder picks the root; inorder tells where its left and right subtrees split.",
  "Root 3 is at index 1 in inorder, so 9 is in its left subtree and 20,15,7 are in its right subtree."
);

addAdditionalQuestion(122, "Binary Tree Zigzag Level Order Traversal",
  "Return the values of a binary tree level by level, alternating left-to-right and right-to-left order.",
  "Use breadth-first search. For each level, write values into their final positions; reverse the target index on alternating levels.",
  "1. Push the root into a queue.\n2. For each level, allocate an output row of that level's size.\n3. Place each popped value at index i or size - 1 - i according to direction.\n4. Enqueue its children and toggle direction.",
  String.raw`class Solution {
public:
    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
        vector<vector<int>> result;
        if (!root) return result;
        queue<TreeNode*> nodes;
        nodes.push(root);
        bool leftToRight = true;
        while (!nodes.empty()) {
            int size = static_cast<int>(nodes.size());
            vector<int> level(size);
            for (int i = 0; i < size; ++i) {
                TreeNode* node = nodes.front();
                nodes.pop();
                int index = leftToRight ? i : size - 1 - i;
                level[index] = node->val;
                if (node->left) nodes.push(node->left);
                if (node->right) nodes.push(node->right);
            }
            result.push_back(move(level));
            leftToRight = !leftToRight;
        }
        return result;
    }
};`,
  "- Time: O(n).\n- Space: O(n) for the queue and returned levels.",
  "> BFS by level; reverse placement direction, not the queue order.",
  "A level [2,3] on a right-to-left turn is written as [3,2]."
);

addAdditionalQuestion(123, "Subtree of Another Tree",
  "Return true if root contains a subtree whose structure and node values exactly match subRoot. An empty subRoot is a subtree.",
  "At each node in root, compare the two trees for exact equality. If they differ, search the left and right subtrees.",
  "1. If subRoot is null, return true.\n2. If root is null, return false.\n3. If both trees match at this node, return true.\n4. Otherwise, search root's left or right subtree.",
  String.raw`class Solution {
    bool sameTree(TreeNode* a, TreeNode* b) {
        if (!a || !b) return a == b;
        return a->val == b->val
            && sameTree(a->left, b->left)
            && sameTree(a->right, b->right);
    }

public:
    bool isSubtree(TreeNode* root, TreeNode* subRoot) {
        if (!subRoot) return true;
        if (!root) return false;
        return sameTree(root, subRoot)
            || isSubtree(root->left, subRoot)
            || isSubtree(root->right, subRoot);
    }
};`,
  "- Time: O(mn) in the worst case.\n- Space: O(h) recursion, where h is the height of root.",
  "> Try an exact tree match at every node of the larger tree.",
  "A value match at the root is not enough; both child structures and values must also match."
);

addAdditionalQuestion(124, "Flatten Binary Tree to Linked List",
  "Flatten a binary tree into a preorder linked list in place. Each node's left pointer must be null and its right pointer points to the next node.",
  "Use an explicit stack for preorder traversal. Push the right child before the left child so the left child is processed first, then link each visited node to the next.",
  "1. Push the root if it exists.\n2. Pop a node and push its right, then left child.\n3. Link the previously visited node's right pointer to the current node and clear its left pointer.\n4. Continue until the stack is empty.",
  String.raw`class Solution {
public:
    void flatten(TreeNode* root) {
        if (!root) return;
        stack<TreeNode*> nodes;
        nodes.push(root);
        TreeNode* previous = nullptr;
        while (!nodes.empty()) {
            TreeNode* node = nodes.top();
            nodes.pop();
            if (previous) {
                previous->left = nullptr;
                previous->right = node;
            }
            if (node->right) nodes.push(node->right);
            if (node->left) nodes.push(node->left);
            previous = node;
        }
        previous->left = nullptr;
    }
};`,
  "- Time: O(n).\n- Space: O(n) for the stack.",
  "> Preorder is root, left, right; push right before left on a stack.",
  "For root 1 with children 2 and 5, the resulting right chain begins 1 -> 2 -> 5."
);

addAdditionalQuestion(125, "Populating Next Right Pointers in Each Node",
  "For a perfect binary tree, connect each node's next pointer to its adjacent node on the same level. The last node on every level points to null.",
  "Walk each level using already established next pointers. In a perfect tree, a node's left child links to its right child, and its right child links to the next parent's left child.",
  "1. Start at the root and process a level while its first node has children.\n2. Connect each parent's left child to its right child.\n3. If the parent has a next neighbor, connect its right child to that neighbor's left child.\n4. Move to the next level's leftmost node.",
  String.raw`class Solution {
public:
    Node* connect(Node* root) {
        Node* level = root;
        while (level && level->left) {
            for (Node* node = level; node; node = node->next) {
                node->left->next = node->right;
                if (node->next)
                    node->right->next = node->next->left;
            }
            level = level->left;
        }
        return root;
    }
};`,
  "- Time: O(n).\n- Auxiliary space: O(1).",
  "> Connect siblings, then connect across neighboring parents using next.",
  "For adjacent parents A and B, A.right->next is set to B.left."
);

addAdditionalQuestion(126, "Path Sum II",
  "Return every root-to-leaf path whose node values sum to targetSum. A path must start at the root and end at a leaf.",
  "Use depth-first search with a current path and running sum. Add a path only at a leaf with the target sum, then backtrack.",
  "1. Return immediately for a null node.\n2. Add the node to the path and its value to the sum.\n3. If it is a leaf and the sum matches, save a copy of the path.\n4. Search both children, then remove the node from the path.",
  String.raw`class Solution {
    vector<vector<int>> result;
    vector<int> path;

    void dfs(TreeNode* node, long long sum, int target) {
        if (!node) return;
        path.push_back(node->val);
        sum += node->val;
        if (!node->left && !node->right && sum == target)
            result.push_back(path);
        dfs(node->left, sum, target);
        dfs(node->right, sum, target);
        path.pop_back();
    }

public:
    vector<vector<int>> pathSum(TreeNode* root, int targetSum) {
        result.clear();
        path.clear();
        dfs(root, 0, targetSum);
        return result;
    }
};`,
  "- Time: O(n + output size).\n- Space: O(h) auxiliary recursion and path storage, excluding the result.",
  "> DFS root to leaf, save matching paths, and backtrack after each node.",
  "A path [5,4,11,2] is saved only when node 2 is a leaf and the total equals the target."
);

addAdditionalQuestion(127, "Path Sum III",
  "Count paths in a binary tree whose node values sum to targetSum. Paths may start and end at any nodes but must travel downward.",
  "Use prefix sums during DFS. For current sum S, every earlier prefix S - targetSum starts a valid path ending here. A frequency map counts those prefixes.",
  "1. Initialize prefix frequency with sum 0 occurring once.\n2. At each node, add its value to the running sum.\n3. Add the frequency of runningSum - targetSum to the answer.\n4. Record the current sum, recurse, then remove it when backtracking.",
  String.raw`class Solution {
    unordered_map<long long, int> prefixCount;
    int target;

    int dfs(TreeNode* node, long long sum) {
        if (!node) return 0;
        sum += node->val;
        int paths = prefixCount[sum - target];
        ++prefixCount[sum];
        paths += dfs(node->left, sum);
        paths += dfs(node->right, sum);
        if (--prefixCount[sum] == 0) prefixCount.erase(sum);
        return paths;
    }

public:
    int pathSum(TreeNode* root, int targetSum) {
        prefixCount.clear();
        prefixCount[0] = 1;
        target = targetSum;
        return dfs(root, 0);
    }
};`,
  "- Time: O(n) average.\n- Space: O(h) active prefix sums, up to O(n).",
  "> Count prior prefixes equal to current sum minus target; undo the prefix after each branch.",
  "If the current prefix is 8 and the target is 3, prior prefixes equal to 5 start valid paths."
);

addAdditionalQuestion(128, "Binary Search Tree Iterator",
  "Implement an iterator over a BST with next() returning the next smallest value and hasNext() reporting whether one remains.",
  "Maintain a stack of the path to the next inorder node. Push an entire left spine initially and after each next() call.",
  "1. Push the root's left spine into the stack.\n2. hasNext returns whether the stack is non-empty.\n3. next pops the smallest pending node, pushes the left spine of its right child, and returns its value.",
  String.raw`class BSTIterator {
    stack<TreeNode*> nodes;

    void pushLeft(TreeNode* node) {
        while (node) {
            nodes.push(node);
            node = node->left;
        }
    }

public:
    BSTIterator(TreeNode* root) {
        pushLeft(root);
    }

    int next() {
        TreeNode* node = nodes.top();
        nodes.pop();
        pushLeft(node->right);
        return node->val;
    }

    bool hasNext() {
        return !nodes.empty();
    }
};`,
  "- Time: O(1) amortized per operation; O(h) worst case for next().\n- Space: O(h).",
  "> Iterative inorder traversal: keep the unvisited left spine on a stack.",
  "After returning the leftmost node, the next candidate is the leftmost node in its right subtree."
);

addAdditionalQuestion(129, "Binary Tree Inorder Traversal (iterative)",
  "Return the inorder traversal of a binary tree without recursion: visit left subtree, node, then right subtree.",
  "Use a stack to simulate recursive calls. Descend left while saving nodes, visit the top node, and then traverse its right subtree.",
  "1. Set current to root.\n2. Push nodes while moving current left.\n3. Pop and record a node, then set current to its right child.\n4. Continue while current exists or the stack is non-empty.",
  String.raw`class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> result;
        stack<TreeNode*> nodes;
        TreeNode* current = root;
        while (current || !nodes.empty()) {
            while (current) {
                nodes.push(current);
                current = current->left;
            }
            current = nodes.top();
            nodes.pop();
            result.push_back(current->val);
            current = current->right;
        }
        return result;
    }
};`,
  "- Time: O(n).\n- Space: O(h), where h is the tree height.",
  "> Stack replaces recursion: go left, visit, then go right.",
  "For root 2 with children 1 and 3, the stack traversal returns [1,2,3]."
);

addAdditionalQuestion(130, "Delete Node in a BST",
  "Delete the node with the given key from a BST and return the updated root while preserving BST ordering.",
  "Search recursively. A node with zero or one child is replaced by its child. For two children, copy its inorder successor (the minimum of its right subtree) and delete that successor.",
  "1. Search left or right according to the key.\n2. If found with at most one child, return the non-null child.\n3. If it has two children, copy the right subtree's minimum value.\n4. Delete that successor from the right subtree and return the node.",
  String.raw`class Solution {
    TreeNode* minimum(TreeNode* node) {
        while (node->left) node = node->left;
        return node;
    }

public:
    TreeNode* deleteNode(TreeNode* root, int key) {
        if (!root) return nullptr;
        if (key < root->val) {
            root->left = deleteNode(root->left, key);
        } else if (key > root->val) {
            root->right = deleteNode(root->right, key);
        } else {
            if (!root->left) return root->right;
            if (!root->right) return root->left;
            TreeNode* successor = minimum(root->right);
            root->val = successor->val;
            root->right = deleteNode(root->right, successor->val);
        }
        return root;
    }
};`,
  "- Time: O(h), where h is the BST height.\n- Space: O(h) recursion.",
  "> Two children: replace with the right-subtree minimum, then delete that minimum.",
  "Deleting a node with children 2 and 8 can replace its value with the minimum in the right subtree, then remove that successor."
);

addAdditionalQuestion(131, "Linked List Cycle II ★",
  "Return the node where a linked-list cycle begins, or nullptr if the list has no cycle.",
  "Floyd's tortoise-and-hare pointers meet inside a cycle. Reset one pointer to the head; moving both one step at a time makes them meet at the cycle entry.",
  "1. Advance slow by one and fast by two until they meet or fast reaches null.\n2. If fast is null or has no next node, return nullptr.\n3. Reset slow to head.\n4. Advance both one node at a time; their meeting node is the cycle entry.",
  String.raw`class Solution {
public:
    ListNode* detectCycle(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;
        do {
            if (!fast || !fast->next) return nullptr;
            slow = slow->next;
            fast = fast->next->next;
        } while (slow != fast);
        slow = head;
        while (slow != fast) {
            slow = slow->next;
            fast = fast->next;
        }
        return slow;
    }
};`,
  "- Time: O(n).\n- Space: O(1).",
  "> After the pointers meet, reset one to head; their next meeting is the entry.",
  "The initial meeting proves a cycle exists; the second phase locates its first node."
);

addAdditionalQuestion(132, "Sort List",
  "Sort a singly linked list in ascending order in O(n log n) time and constant auxiliary space apart from recursion or merge bookkeeping.",
  "Use merge sort: split the list into halves with slow and fast pointers, sort each half recursively, and merge the sorted halves.",
  "1. Return for a list of zero or one nodes.\n2. Find the end of the left half and split the list.\n3. Recursively sort both halves.\n4. Merge them with a dummy-head pointer.",
  String.raw`class Solution {
    ListNode* merge(ListNode* a, ListNode* b) {
        ListNode dummy(0);
        ListNode* tail = &dummy;
        while (a && b) {
            if (a->val <= b->val) {
                tail->next = a;
                a = a->next;
            } else {
                tail->next = b;
                b = b->next;
            }
            tail = tail->next;
        }
        tail->next = a ? a : b;
        return dummy.next;
    }

public:
    ListNode* sortList(ListNode* head) {
        if (!head || !head->next) return head;
        ListNode* slow = head;
        ListNode* fast = head->next;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
        }
        ListNode* right = slow->next;
        slow->next = nullptr;
        return merge(sortList(head), sortList(right));
    }
};`,
  "- Time: O(n log n).\n- Space: O(log n) recursion stack.",
  "> Split, recursively sort each half, and merge; linked-list merge sort needs no array.",
  "Split 4 -> 2 -> 1 into smaller lists, sort each, then merge to 1 -> 2 -> 4."
);

addAdditionalQuestion(133, "Reverse Nodes in k-Group",
  "Reverse every consecutive group of k nodes in a linked list. Leave a final group shorter than k unchanged.",
  "Use a dummy node and locate the kth node after each already-processed group. Reverse exactly that group, linking its tail to the following nodes.",
  "1. Find the kth node after groupPrev; if it does not exist, stop.\n2. Save the node after the group.\n3. Reverse links from the group start up to that saved node.\n4. Connect the old group start to the next group and advance groupPrev.",
  String.raw`class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {
        ListNode dummy(0, head);
        ListNode* groupPrev = &dummy;
        while (true) {
            ListNode* kth = groupPrev;
            for (int i = 0; i < k && kth; ++i)
                kth = kth->next;
            if (!kth) break;
            ListNode* groupNext = kth->next;
            ListNode* previous = groupNext;
            ListNode* current = groupPrev->next;
            while (current != groupNext) {
                ListNode* next = current->next;
                current->next = previous;
                previous = current;
                current = next;
            }
            ListNode* oldStart = groupPrev->next;
            groupPrev->next = kth;
            groupPrev = oldStart;
        }
        return dummy.next;
    }
};`,
  "- Time: O(n).\n- Space: O(1).",
  "> Reverse only after confirming a complete group of k nodes exists.",
  "For 1 -> 2 -> 3 -> 4 and k = 2, the result is 2 -> 1 -> 4 -> 3."
);

addAdditionalQuestion(134, "Swap Nodes in Pairs",
  "Swap every two adjacent nodes in a linked list and return the new head. Do not change node values.",
  "Use a dummy node before the head. For each pair, redirect the previous node, second node, and first node links.",
  "1. Let first and second be the next two nodes after the current predecessor.\n2. Link predecessor to second and first to the node after second.\n3. Link second to first.\n4. Advance the predecessor to first.",
  String.raw`class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        ListNode dummy(0, head);
        ListNode* previous = &dummy;
        while (previous->next && previous->next->next) {
            ListNode* first = previous->next;
            ListNode* second = first->next;
            first->next = second->next;
            second->next = first;
            previous->next = second;
            previous = first;
        }
        return dummy.next;
    }
};`,
  "- Time: O(n).\n- Space: O(1).",
  "> Rewire each pair using a dummy predecessor; leave an unpaired tail alone.",
  "1 -> 2 -> 3 becomes 2 -> 1 -> 3."
);

addAdditionalQuestion(135, "Odd Even Linked List",
  "Group nodes at odd indices followed by nodes at even indices, preserving relative order within each group. Indices are one-based.",
  "Maintain separate odd and even chains using the existing nodes, then append the even chain after the odd chain.",
  "1. Keep the first node as the odd tail and the second as the even head and tail.\n2. Repeatedly link the odd tail to the next odd node and the even tail to the next even node.\n3. Append the even head after the odd tail.",
  String.raw`class Solution {
public:
    ListNode* oddEvenList(ListNode* head) {
        if (!head || !head->next) return head;
        ListNode* odd = head;
        ListNode* evenHead = head->next;
        ListNode* even = evenHead;
        while (even && even->next) {
            odd->next = even->next;
            odd = odd->next;
            even->next = odd->next;
            even = even->next;
        }
        odd->next = evenHead;
        return head;
    }
};`,
  "- Time: O(n).\n- Space: O(1).",
  "> Build odd-index and even-index chains in place, then join them.",
  "1 -> 2 -> 3 -> 4 -> 5 becomes 1 -> 3 -> 5 -> 2 -> 4."
);

addAdditionalQuestion(136, "Remove Duplicates from Sorted List II",
  "Given a sorted linked list, remove every value that occurs more than once. Return only values that appeared exactly once.",
  "Use a dummy predecessor. When a run contains duplicates, skip the entire run; otherwise keep its node.",
  "1. Set previous to a dummy node before head and current to head.\n2. If current begins a repeated run, advance past every node with that value and link previous to the next distinct value.\n3. Otherwise advance previous by one node.\n4. Continue until current is null.",
  String.raw`class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode dummy(0, head);
        ListNode* previous = &dummy;
        ListNode* current = head;
        while (current) {
            if (current->next && current->val == current->next->val) {
                int duplicate = current->val;
                while (current && current->val == duplicate)
                    current = current->next;
                previous->next = current;
            } else {
                previous = current;
                current = current->next;
            }
        }
        return dummy.next;
    }
};`,
  "- Time: O(n).\n- Space: O(1).",
  "> In a sorted list, detect a repeated run and remove the whole run.",
  "1 -> 2 -> 2 -> 3 keeps 1 and 3, removing both nodes with value 2."
);

addAdditionalQuestion(137, "Decode String ★",
  "Decode strings encoded as k[encoded_string], where the bracketed substring is repeated k times. Encodings may be nested.\n\nExample: 3[a2[c]] decodes to accaccacc.",
  "Use stacks to save the repeat count and the string prefix when entering a bracket. On closing a bracket, repeat the current substring and append it to the saved prefix.",
  "1. Accumulate each multi-digit repeat count.\n2. At '[', push the count and current prefix, then start a fresh substring.\n3. At ']', pop both and append the current substring the required number of times.\n4. Append ordinary characters directly.",
  String.raw`class Solution {
public:
    string decodeString(string s) {
        stack<int> counts;
        stack<string> prefixes;
        string current;
        int count = 0;
        for (char ch : s) {
            if (isdigit(static_cast<unsigned char>(ch))) {
                count = count * 10 + (ch - '0');
            } else if (ch == '[') {
                counts.push(count);
                prefixes.push(current);
                count = 0;
                current.clear();
            } else if (ch == ']') {
                int repeat = counts.top();
                counts.pop();
                string expanded;
                for (int i = 0; i < repeat; ++i) expanded += current;
                current = prefixes.top() + expanded;
                prefixes.pop();
            } else {
                current += ch;
            }
        }
        return current;
    }
};`,
  "- Time: O(output length), excluding the work of copying intermediate strings.\n- Space: O(output length + nesting depth).",
  "> On '[', save the prefix and count; on ']', expand and restore.",
  "For 2[ab], closing the bracket expands ab twice and restores the prefix, producing abab."
);

addAdditionalQuestion(138, "Basic Calculator II ★",
  "Evaluate a string of non-negative integers and the operators +, -, *, and /. Division truncates toward zero. The expression contains no parentheses.",
  "Process multiplication and division immediately by modifying the previous term. Keep addition and subtraction as signed stack terms, then sum them.",
  "1. Scan digits into the current number; skip spaces.\n2. At an operator or end of input, apply the previous operator to the number.\n3. Push positive or negative terms; for multiplication or division, update the stack's last term.\n4. Sum the stack.",
  String.raw`class Solution {
public:
    int calculate(string s) {
        vector<long long> terms;
        long long number = 0;
        char operation = '+';
        for (int i = 0; i <= static_cast<int>(s.size()); ++i) {
            char ch = i == static_cast<int>(s.size()) ? '+' : s[i];
            if (isdigit(static_cast<unsigned char>(ch))) {
                number = number * 10 + (ch - '0');
            }
            if (ch == ' ') continue;
            if (ch == '+' || ch == '-' || ch == '*' || ch == '/'
                || i == static_cast<int>(s.size())) {
                if (operation == '+') terms.push_back(number);
                else if (operation == '-') terms.push_back(-number);
                else if (operation == '*') terms.back() *= number;
                else terms.back() /= number;
                operation = ch;
                number = 0;
            }
        }
        long long result = 0;
        for (long long term : terms) result += term;
        return static_cast<int>(result);
    }
};`,
  "- Time: O(n).\n- Space: O(n) for stored additive terms.",
  "> Apply * and / immediately; keep signed terms for + and -.",
  "For 3 + 2 * 2, store 3, then replace the last term 2 with 4; the sum is 7."
);

addAdditionalQuestion(139, "Remove K Digits",
  "Given a non-negative number as a string and an integer k, remove k digits so the resulting number is as small as possible. Return it without leading zeroes, or return 0.",
  "A monotonic increasing digit stack gives the smallest number: when a smaller digit arrives, remove larger preceding digits while removals remain.",
  "1. For each digit, pop larger trailing digits while k remains.\n2. Append the digit.\n3. Remove any remaining k digits from the end.\n4. Strip leading zeroes and return 0 if no digits remain.",
  String.raw`class Solution {
public:
    string removeKdigits(string num, int k) {
        string digits;
        for (char ch : num) {
            while (k > 0 && !digits.empty() && digits.back() > ch) {
                digits.pop_back();
                --k;
            }
            digits.push_back(ch);
        }
        while (k > 0 && !digits.empty()) {
            digits.pop_back();
            --k;
        }
        size_t first = digits.find_first_not_of('0');
        if (first == string::npos) return "0";
        return digits.substr(first);
    }
};`,
  "- Time: O(n).\n- Space: O(n).",
  "> Remove a larger previous digit when a smaller digit arrives.",
  "For 1432219 with k = 3, remove 4, 3, and one 2 to get 1219."
);

addAdditionalQuestion(140, "Car Fleet",
  "Cars travel toward a target on a one-lane road. A faster car cannot pass a slower car ahead; it joins that car's fleet. Return the number of fleets arriving at the target.",
  "Sort cars by starting position from closest to farthest from the target. A car forms a new fleet only if its arrival time exceeds the slowest fleet ahead.",
  "1. Pair each starting position with its speed and sort by position descending.\n2. Compute each car's time to reach target.\n3. Count a new fleet when its time exceeds the last fleet time; otherwise it catches that fleet.",
  String.raw`class Solution {
public:
    int carFleet(int target, vector<int>& position, vector<int>& speed) {
        vector<pair<int, int>> cars;
        for (int i = 0; i < static_cast<int>(position.size()); ++i)
            cars.push_back({position[i], speed[i]});
        sort(cars.rbegin(), cars.rend());
        int fleets = 0;
        double lastTime = 0.0;
        for (const auto& car : cars) {
            double time = static_cast<double>(target - car.first) / car.second;
            if (time > lastTime) {
                ++fleets;
                lastTime = time;
            }
        }
        return fleets;
    }
};`,
  "- Time: O(n log n) for sorting.\n- Space: O(n) for paired cars.",
  "> Scan from front to back; only a slower arrival time creates a new fleet.",
  "If the front car needs 2 hours and a car behind needs 1 hour, the rear car catches up and joins it."
);

addAdditionalQuestion(141, "Implement Queue using Stacks",
  "Implement a FIFO queue using two stacks. Support push, pop, peek, and empty.",
  "Use one stack for incoming values and one for outgoing values. Transfer values only when the outgoing stack is empty, reversing their order to expose the oldest item.",
  "1. push adds to the incoming stack.\n2. Before pop or peek, transfer all incoming values to outgoing if outgoing is empty.\n3. pop removes the outgoing top; peek returns it.\n4. empty is true only when both stacks are empty.",
  String.raw`class MyQueue {
    stack<int> incoming;
    stack<int> outgoing;

    void prepareOutgoing() {
        if (outgoing.empty()) {
            while (!incoming.empty()) {
                outgoing.push(incoming.top());
                incoming.pop();
            }
        }
    }

public:
    MyQueue() = default;

    void push(int x) {
        incoming.push(x);
    }

    int pop() {
        prepareOutgoing();
        int value = outgoing.top();
        outgoing.pop();
        return value;
    }

    int peek() {
        prepareOutgoing();
        return outgoing.top();
    }

    bool empty() {
        return incoming.empty() && outgoing.empty();
    }
};`,
  "- Time: O(1) amortized per operation; a transfer costs O(n) once per item.\n- Space: O(n).",
  "> Incoming stack accepts items; outgoing stack serves the oldest item first.",
  "Push 1 then 2; transferring produces outgoing top 1, so pop returns 1."
);

addAdditionalQuestion(142, "Reorganize String",
  "Rearrange the characters of a string so that no two adjacent characters are equal. Return any valid arrangement, or an empty string if none exists.",
  "Always use the currently most frequent available character. Temporarily hold the previously used character out of the max-heap for one turn.",
  "1. Count character frequencies and push them into a max-heap.\n2. Pop the most frequent available character and append it.\n3. Return the previously held character to the heap if it still has copies.\n4. Hold the current character with its remaining count; return empty if not all characters were placed.",
  String.raw`class Solution {
public:
    string reorganizeString(string s) {
        vector<int> frequency(26, 0);
        for (char ch : s) ++frequency[ch - 'a'];
        priority_queue<pair<int, char>> available;
        for (int i = 0; i < 26; ++i) {
            if (frequency[i] > 0)
                available.push({frequency[i], static_cast<char>('a' + i)});
        }
        string result;
        pair<int, char> held = {0, '#'};
        while (!available.empty()) {
            auto current = available.top();
            available.pop();
            result += current.second;
            if (held.first > 0) available.push(held);
            held = {current.first - 1, current.second};
        }
        return result.size() == s.size() ? result : "";
    }
};`,
  "- Time: O(n log 26), effectively O(n) for lowercase English letters.\n- Space: O(26) besides the result.",
  "> Take the most frequent character, but keep the last used character out for one turn.",
  "For aabb, choose a, then b, then a, then b to form abab."
);

addAdditionalQuestion(143, "Sort Characters By Frequency",
  "Rearrange a string so characters appear in descending order of frequency. Characters with equal frequency may appear in either order.",
  "Count each character, then use a max-heap of (frequency, character) pairs to emit each character its number of times.",
  "1. Count character frequencies.\n2. Push each character and its count into a max-heap.\n3. Pop entries and append that character count times.\n4. Return the built string.",
  String.raw`class Solution {
public:
    string frequencySort(string s) {
        unordered_map<char, int> frequency;
        for (char ch : s) ++frequency[ch];
        priority_queue<pair<int, char>> heap;
        for (const auto& entry : frequency)
            heap.push({entry.second, entry.first});
        string result;
        while (!heap.empty()) {
            pair<int, char> entry = heap.top();
            heap.pop();
            result.append(entry.first, entry.second);
        }
        return result;
    }
};`,
  "- Time: O(n + u log u), where u is the number of distinct characters.\n- Space: O(u) besides the result.",
  "> Count first, then emit highest-frequency characters from a max-heap.",
  "For tree, the character with frequency 2 is emitted twice before the frequency-1 characters."
);

addAdditionalQuestion(144, "Top K Frequent Words",
  "Return the k most frequent words. Sort by descending frequency; break ties by lexicographically smaller word first.",
  "Count words and maintain a heap whose top is the best remaining answer: highest frequency, then smallest word.",
  "1. Count each word.\n2. Push each word and frequency into a priority queue with the required tie-break.\n3. Pop k words in order and return them.",
  String.raw`class Solution {
    struct WorseFirst {
        bool operator()(const pair<string, int>& a,
                        const pair<string, int>& b) const {
            if (a.second != b.second) return a.second < b.second;
            return a.first > b.first;
        }
    };

public:
    vector<string> topKFrequent(vector<string>& words, int k) {
        unordered_map<string, int> frequency;
        for (const string& word : words) ++frequency[word];
        priority_queue<pair<string, int>,
                       vector<pair<string, int>>, WorseFirst> heap;
        for (const auto& entry : frequency)
            heap.push({entry.first, entry.second});
        vector<string> result;
        while (k-- > 0 && !heap.empty()) {
            result.push_back(heap.top().first);
            heap.pop();
        }
        return result;
    }
};`,
  "- Time: O(u log u + k log u), where u is the number of unique words.\n- Space: O(u).",
  "> Heap priority: greater frequency first, then lexicographically smaller word.",
  "If two words both occur twice, apple is returned before banana."
);

addAdditionalQuestion(145, "Find K Pairs with Smallest Sums",
  "Given two ascending arrays nums1 and nums2, return k pairs with the smallest sums. A pair contains one value from each array.",
  "Treat each row of pair sums as sorted. Seed a min-heap with the first pair from up to k rows; after removing a pair, add the next pair from that row.",
  "1. Return an empty result if k is zero or either array is empty.\n2. Push (sum, i, 0) for the first min(k, nums1.size()) rows.\n3. Pop the smallest pair, record it, and push the next column from the same row.\n4. Stop after k pairs or an empty heap.",
  String.raw`class Solution {
public:
    vector<vector<int>> kSmallestPairs(vector<int>& nums1,
                                        vector<int>& nums2, int k) {
        vector<vector<int>> result;
        if (k <= 0 || nums1.empty() || nums2.empty()) return result;
        using State = tuple<long long, int, int>;
        priority_queue<State, vector<State>, greater<State>> heap;
        int rows = min(k, static_cast<int>(nums1.size()));
        for (int i = 0; i < rows; ++i)
            heap.push({static_cast<long long>(nums1[i]) + nums2[0], i, 0});
        while (k-- > 0 && !heap.empty()) {
            State current = heap.top();
            heap.pop();
            int i = get<1>(current);
            int j = get<2>(current);
            result.push_back({nums1[i], nums2[j]});
            if (j + 1 < static_cast<int>(nums2.size())) {
                heap.push({static_cast<long long>(nums1[i]) + nums2[j + 1],
                           i, j + 1});
            }
        }
        return result;
    }
};`,
  "- Time: O(min(k,n1) + k log min(k,n1)).\n- Space: O(min(k,n1)) for the heap.",
  "> Each heap item is the next unreturned pair from one sorted row.",
  "For nums1 = [1,7] and nums2 = [2,4], pop (1,2), then add (1,4) as the next candidate from that row."
);

addAdditionalQuestion(146, "Last Stone Weight",
  "Repeatedly smash the two heaviest stones. Equal stones both disappear; otherwise the difference remains. Return the final stone's weight or zero.",
  "A max-heap keeps the two heaviest stones available at its top.",
  "1. Insert all stone weights into a max-heap.\n2. Remove the two largest weights.\n3. If they differ, insert their difference.\n4. Continue until at most one remains and return it, or zero.",
  String.raw`class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {
        priority_queue<int> heap(stones.begin(), stones.end());
        while (heap.size() > 1) {
            int first = heap.top();
            heap.pop();
            int second = heap.top();
            heap.pop();
            if (first != second) heap.push(first - second);
        }
        return heap.empty() ? 0 : heap.top();
    }
};`,
  "- Time: O(n log n).\n- Space: O(n).",
  "> Max-heap: repeatedly remove the two heaviest and reinsert their difference.",
  "Smashing 8 and 7 leaves 1; that remaining stone is then compared with the next heaviest."
);

addAdditionalQuestion(147, "Find Peak Element ★",
  "Return an index of a peak element, where a peak is strictly greater than its neighbors. Treat values outside the array as negative infinity. Assume adjacent values differ.",
  "Binary-search the slope. If nums[mid] is smaller than nums[mid + 1], a peak exists to the right; otherwise a peak exists at mid or to its left.",
  "1. Search the inclusive range [0, n - 1].\n2. Compare the middle element with its right neighbor.\n3. Move right when the slope rises; otherwise keep the left half including mid.\n4. Return the converged index.",
  String.raw`class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        int left = 0;
        int right = static_cast<int>(nums.size()) - 1;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] < nums[mid + 1])
                left = mid + 1;
            else
                right = mid;
        }
        return left;
    }
};`,
  "- Time: O(log n).\n- Space: O(1).",
  "> Rising slope means search right; flat-or-falling means a peak is at mid or left.",
  "For [1,2,3,1], the search follows the rising slope and returns index 2."
);

addAdditionalQuestion(148, "Median of Two Sorted Arrays",
  "Return the median of two sorted arrays in O(log(min(m,n))) time. The combined array may have even or odd length.",
  "Binary-search a partition in the smaller array. Choose the matching partition in the other array so the left side contains half the values, and verify both partition boundaries are ordered.",
  "1. Ensure the first array is the smaller one.\n2. Binary-search its partition and derive the other partition.\n3. If the partitions cross, move the search; otherwise the maximum left value and minimum right value define the median.\n4. For odd total length return the maximum left value; for even length average the two middle values.",
  String.raw`class Solution {
public:
    double findMedianSortedArrays(vector<int>& a, vector<int>& b) {
        if (a.size() > b.size()) return findMedianSortedArrays(b, a);
        int m = static_cast<int>(a.size());
        int n = static_cast<int>(b.size());
        int left = 0, right = m;
        while (left <= right) {
            int cutA = left + (right - left) / 2;
            int cutB = (m + n + 1) / 2 - cutA;
            long long leftA = cutA == 0 ? LLONG_MIN : a[cutA - 1];
            long long rightA = cutA == m ? LLONG_MAX : a[cutA];
            long long leftB = cutB == 0 ? LLONG_MIN : b[cutB - 1];
            long long rightB = cutB == n ? LLONG_MAX : b[cutB];
            if (leftA <= rightB && leftB <= rightA) {
                long long lower = max(leftA, leftB);
                if ((m + n) % 2 == 1) return static_cast<double>(lower);
                long long upper = min(rightA, rightB);
                return (lower + upper) / 2.0;
            }
            if (leftA > rightB) right = cutA - 1;
            else left = cutA + 1;
        }
        return 0.0;
    }
};`,
  "- Time: O(log(min(m,n))).\n- Space: O(1).",
  "> Partition the smaller array; valid partitions have leftA <= rightB and leftB <= rightA.",
  "For [1,3] and [2], the valid partition leaves 2 as the middle value."
);

addAdditionalQuestion(149, "Time Based Key-Value Store",
  "Implement set(key, value, timestamp) and get(key, timestamp). get returns the value with the largest timestamp not greater than the query, or an empty string.",
  "Store each key's timestamp-value pairs in insertion order. Since timestamps for set calls are strictly increasing, binary-search the first timestamp greater than the query.",
  "1. set appends the timestamp-value pair for the key.\n2. get uses upper_bound to find the first timestamp greater than the query.\n3. If that iterator is at the beginning, return empty; otherwise return the preceding value.",
  String.raw`class TimeMap {
    unordered_map<string, vector<pair<int, string>>> values;

public:
    TimeMap() = default;

    void set(string key, string value, int timestamp) {
        values[key].push_back({timestamp, move(value)});
    }

    string get(string key, int timestamp) {
        auto found = values.find(key);
        if (found == values.end()) return "";
        const auto& entries = found->second;
        auto it = upper_bound(
            entries.begin(), entries.end(), timestamp,
            [](int time, const pair<int, string>& entry) {
                return time < entry.first;
            });
        if (it == entries.begin()) return "";
        return prev(it)->second;
    }
};`,
  "- Time: set O(1) amortized; get O(log n) for that key.\n- Space: O(total stored entries).",
  "> upper_bound(timestamp) then step back to get the latest value not after the query.",
  "For timestamps 2 and 5, a query at 4 selects the entry at timestamp 2."
);

addAdditionalQuestion(150, "Sqrt(x)",
  "Given a non-negative integer x, return the integer square root of x, rounded down. Do not use a built-in square-root function.",
  "Binary-search for the greatest integer whose square is no greater than x. Compare mid with x / mid to avoid overflowing mid * mid.",
  "1. Search from 1 through x, keeping the best valid answer.\n2. If mid <= x / mid, record mid and search higher.\n3. Otherwise search lower.\n4. Return zero directly when the range is empty.",
  String.raw`class Solution {
public:
    int mySqrt(int x) {
        int left = 1, right = x, answer = 0;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (mid <= x / mid) {
                answer = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return answer;
    }
};`,
  "- Time: O(log x).\n- Space: O(1).",
  "> Find the last mid satisfying mid <= x / mid; this avoids multiplication overflow.",
  "For x = 8, 2 is valid because 2 <= 8 / 2, while 3 is too large."
);

addAdditionalQuestion(151, "Search in Rotated Sorted Array II",
  "Search for target in a rotated ascending array that may contain duplicates. Return true if target is present.",
  "Binary-search a sorted half. When the left, middle, and right values are equal, the sorted half cannot be identified, so shrink both ends.",
  "1. Compare nums[mid] with target and return true if equal.\n2. If left, mid, and right values are equal, increment left and decrement right.\n3. Otherwise identify the sorted half and keep it only if target lies within its bounds.\n4. Return false if the range is exhausted.",
  String.raw`class Solution {
public:
    bool search(vector<int>& nums, int target) {
        int left = 0, right = static_cast<int>(nums.size()) - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) return true;
            if (nums[left] == nums[mid] && nums[mid] == nums[right]) {
                ++left;
                --right;
            } else if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target < nums[mid])
                    right = mid - 1;
                else
                    left = mid + 1;
            } else {
                if (nums[mid] < target && target <= nums[right])
                    left = mid + 1;
                else
                    right = mid - 1;
            }
        }
        return false;
    }
};`,
  "- Time: O(log n) typically; O(n) worst case with many duplicates.\n- Space: O(1).",
  "> Equal endpoints hide the sorted half; shrink them, otherwise binary-search the sorted half.",
  "For [1,0,1,1,1] and target 0, shrinking the duplicate ends reveals the rotated sorted portion."
);

addAdditionalQuestion(152, "Single Element in a Sorted Array",
  "In a sorted array where every element appears exactly twice except one, return the single element in O(log n) time and O(1) space.",
  "Before the single element, pairs start at even indices; after it, pair alignment shifts. Binary-search an even-aligned index and compare it with its next element.",
  "1. Make mid even.\n2. If nums[mid] equals nums[mid + 1], the single element is to the right.\n3. Otherwise it is at mid or to the left.\n4. Return the value at the converged index.",
  String.raw`class Solution {
public:
    int singleNonDuplicate(vector<int>& nums) {
        int left = 0, right = static_cast<int>(nums.size()) - 1;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (mid % 2 == 1) --mid;
            if (nums[mid] == nums[mid + 1])
                left = mid + 2;
            else
                right = mid;
        }
        return nums[left];
    }
};`,
  "- Time: O(log n).\n- Space: O(1).",
  "> Align mid to an even index; a correctly aligned pair means the singleton is farther right.",
  "For [1,1,2,3,3], the pair at indices 0 and 1 is intact, so search the right half and find 2."
);

addAdditionalQuestion(153, "3Sum Closest",
  "Given an integer array and target, return the sum of three values closest to target. Assume the array has at least three values.",
  "Sort the array. Fix one value and use two pointers to inspect sums while moving toward the target.",
  "1. Sort the array and initialize the best sum from the first three values.\n2. For each fixed index, set left and right pointers around the remaining range.\n3. Update the best sum when the current sum is closer.\n4. Move left for a sum below target and right for a sum above target; return immediately on an exact match.",
  String.raw`class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        sort(nums.begin(), nums.end());
        long long best = static_cast<long long>(nums[0]) + nums[1] + nums[2];
        for (int i = 0; i + 2 < static_cast<int>(nums.size()); ++i) {
            int left = i + 1;
            int right = static_cast<int>(nums.size()) - 1;
            while (left < right) {
                long long sum = static_cast<long long>(nums[i])
                              + nums[left] + nums[right];
                if (llabs(sum - target) < llabs(best - target))
                    best = sum;
                if (sum == target) return target;
                if (sum < target) ++left;
                else --right;
            }
        }
        return static_cast<int>(best);
    }
};`,
  "- Time: O(n^2).\n- Space: O(1) auxiliary, aside from sorting implementation details.",
  "> Sort, fix one value, then move two pointers according to the sum.",
  "For [-1,2,1,-4] and target 1, the sum -1 + 1 + 2 equals 2 and is closest."
);

addAdditionalQuestion(154, "4Sum",
  "Return all unique quadruplets whose values sum to target. The result must not contain duplicate quadruplets.",
  "Sort the array, fix two indices, then use two pointers for the remaining pair. Use 64-bit sums and skip duplicate choices.",
  "1. Sort the array.\n2. Choose i and j, skipping repeated values at the same level.\n3. Move left and right according to the four-value sum.\n4. On a match, record the quadruplet and skip duplicate pointer values.",
  String.raw`class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        vector<vector<int>> result;
        sort(nums.begin(), nums.end());
        int n = static_cast<int>(nums.size());
        for (int i = 0; i < n - 3; ++i) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            for (int j = i + 1; j < n - 2; ++j) {
                if (j > i + 1 && nums[j] == nums[j - 1]) continue;
                int left = j + 1, right = n - 1;
                while (left < right) {
                    long long sum = static_cast<long long>(nums[i])
                                  + nums[j] + nums[left] + nums[right];
                    if (sum == target) {
                        result.push_back({nums[i], nums[j], nums[left], nums[right]});
                        int leftValue = nums[left], rightValue = nums[right];
                        while (left < right && nums[left] == leftValue) ++left;
                        while (left < right && nums[right] == rightValue) --right;
                    } else if (sum < target) {
                        ++left;
                    } else {
                        --right;
                    }
                }
            }
        }
        return result;
    }
};`,
  "- Time: O(n^3).\n- Space: O(1) auxiliary, excluding the result and sorting implementation details.",
  "> Sort, skip duplicates at both fixed indices and after each match, and sum in 64 bits.",
  "For [1,0,-1,0,-2,2] and target 0, each unique value quadruplet is emitted once."
);

addAdditionalQuestion(155, "Merge Sorted Array",
  "Merge nums2 into nums1, which has enough trailing space for both sorted arrays. The first m entries of nums1 and all n entries of nums2 are sorted.",
  "Fill nums1 from the end. This preserves its unread values while selecting the larger of the two current values.",
  "1. Set pointers to the ends of the initialized portions of both arrays.\n2. Write the larger value at the end of nums1.\n3. Continue until every nums2 value has been copied.",
  String.raw`class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int i = m - 1, j = n - 1, write = m + n - 1;
        while (j >= 0) {
            if (i >= 0 && nums1[i] > nums2[j])
                nums1[write--] = nums1[i--];
            else
                nums1[write--] = nums2[j--];
        }
    }
};`,
  "- Time: O(m + n).\n- Space: O(1).",
  "> Merge backward so unread nums1 values are never overwritten.",
  "Merging [1,3,0,0] with [2,4] writes 4, then 3, then 2, then 1 from right to left."
);

addAdditionalQuestion(156, "Find All Duplicates in an Array",
  "An array contains n integers in the range [1,n], with some appearing twice and others once. Return all values that appear twice.",
  "Use each value as an index and negate the value at that index as a visited marker. A value whose index is already marked is a duplicate.",
  "1. For each value, take its absolute value and map it to index value - 1.\n2. If that indexed value is already negative, record the original value.\n3. Otherwise negate it to mark it seen.\n4. Return the duplicates.",
  String.raw`class Solution {
public:
    vector<int> findDuplicates(vector<int>& nums) {
        vector<int> result;
        for (int value : nums) {
            int index = abs(value) - 1;
            if (nums[index] < 0)
                result.push_back(index + 1);
            else
                nums[index] = -nums[index];
        }
        return result;
    }
};`,
  "- Time: O(n).\n- Auxiliary space: O(1), excluding the returned vector; the input is modified.",
  "> Use the sign at index value - 1 as the visited marker.",
  "When value 2 appears a second time, index 1 is already negative, so 2 is recorded."
);

addAdditionalQuestion(157, "First Missing Positive",
  "Return the smallest positive integer missing from an unsorted integer array in O(n) time and O(1) auxiliary space.",
  "Place every value v in [1,n] at index v - 1 by cyclically swapping. The first index whose value is not index + 1 gives the answer.",
  "1. For each index, while its value is positive, at most n, and not already in its target position, swap it to index value - 1.\n2. Scan for the first index where nums[i] != i + 1.\n3. Return i + 1, or n + 1 if all positions match.",
  String.raw`class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        int n = static_cast<int>(nums.size());
        for (int i = 0; i < n; ++i) {
            while (nums[i] >= 1 && nums[i] <= n
                   && nums[nums[i] - 1] != nums[i]) {
                swap(nums[i], nums[nums[i] - 1]);
            }
        }
        for (int i = 0; i < n; ++i) {
            if (nums[i] != i + 1) return i + 1;
        }
        return n + 1;
    }
};`,
  "- Time: O(n) total; each successful swap places one value in its final position.\n- Auxiliary space: O(1).",
  "> Put each in-range positive value v at index v - 1, then find the first mismatch.",
  "For [3,4,-1,1], place 1 at index 0 and 3 at index 2; index 1 does not contain 2, so return 2."
);

addAdditionalQuestion(158, "Fruit Into Baskets",
  "Given a row of fruit types, return the length of the longest contiguous segment containing at most two distinct types.",
  "Use a sliding window and a frequency map. Expand the right edge, then shrink the left edge until no more than two fruit types remain.",
  "1. Add each rightmost fruit to the window count.\n2. While there are more than two distinct types, remove fruits from the left and erase zero counts.\n3. Track the maximum valid window length.",
  String.raw`class Solution {
public:
    int totalFruit(vector<int>& fruits) {
        unordered_map<int, int> count;
        int left = 0, best = 0;
        for (int right = 0; right < static_cast<int>(fruits.size()); ++right) {
            ++count[fruits[right]];
            while (count.size() > 2) {
                if (--count[fruits[left]] == 0) count.erase(fruits[left]);
                ++left;
            }
            best = max(best, right - left + 1);
        }
        return best;
    }
};`,
  "- Time: O(n) average.\n- Space: O(1) for at most three tracked types while shrinking.",
  "> Longest sliding window with at most two distinct values.",
  "For [1,2,1], the window contains two types throughout, so the answer is 3."
);

addAdditionalQuestion(159, "Max Consecutive Ones III",
  "Given a binary array and k, return the longest subarray containing at most k zeroes; those zeroes can be flipped to ones.",
  "Use a sliding window that tracks its number of zeroes. Shrink from the left whenever the window has more than k zeroes.",
  "1. Expand the right edge and count zeroes.\n2. While the count exceeds k, remove the leftmost value and advance left.\n3. Track the maximum window length.",
  String.raw`class Solution {
public:
    int longestOnes(vector<int>& nums, int k) {
        int left = 0, zeroes = 0, best = 0;
        for (int right = 0; right < static_cast<int>(nums.size()); ++right) {
            if (nums[right] == 0) ++zeroes;
            while (zeroes > k) {
                if (nums[left] == 0) --zeroes;
                ++left;
            }
            best = max(best, right - left + 1);
        }
        return best;
    }
};`,
  "- Time: O(n).\n- Space: O(1).",
  "> Keep a window with at most k zeroes; its length is the number of ones after flips.",
  "With k = 1, a window containing one zero remains valid; a second zero forces the left edge forward."
);

addAdditionalQuestion(160, "Subarray Product Less Than K",
  "Given positive integers nums and k, count contiguous subarrays whose product is strictly less than k.",
  "Maintain a sliding-window product. For each right endpoint, every suffix of the valid window is a qualifying subarray, so add its length.",
  "1. If k <= 1, return zero because all values are positive.\n2. Multiply by each rightmost value.\n3. While product is at least k, divide out the leftmost value and advance left.\n4. Add right - left + 1 to the count.",
  String.raw`class Solution {
public:
    int numSubarrayProductLessThanK(vector<int>& nums, int k) {
        if (k <= 1) return 0;
        long long product = 1;
        int left = 0, result = 0;
        for (int right = 0; right < static_cast<int>(nums.size()); ++right) {
            product *= nums[right];
            while (product >= k) product /= nums[left++];
            result += right - left + 1;
        }
        return result;
    }
};`,
  "- Time: O(n).\n- Space: O(1).",
  "> After shrinking to a valid window, add its length for all valid suffixes ending at right.",
  "If the valid window is [2,3,4], the rightmost element 4 contributes [4], [3,4], and [2,3,4]."
);

addAdditionalQuestion(161, "Valid Palindrome II",
  "Return true if a string can become a palindrome after deleting at most one character.",
  "Compare from both ends. At the first mismatch, the only possibilities are to skip the left character or the right character; test both remaining ranges.",
  "1. Move two pointers inward while characters match.\n2. On the first mismatch, check whether either range excluding one endpoint is a palindrome.\n3. Return true if either check succeeds.",
  String.raw`class Solution {
    bool isPalindrome(const string& s, int left, int right) {
        while (left < right) {
            if (s[left++] != s[right--]) return false;
        }
        return true;
    }

public:
    bool validPalindrome(string s) {
        int left = 0, right = static_cast<int>(s.size()) - 1;
        while (left < right && s[left] == s[right]) {
            ++left;
            --right;
        }
        return left >= right
            || isPalindrome(s, left + 1, right)
            || isPalindrome(s, left, right - 1);
    }
};`,
  "- Time: O(n).\n- Space: O(1).",
  "> At the first mismatch, try skipping exactly one side.",
  "For abca, the mismatch b/c can be resolved by skipping b, leaving aca."
);

addAdditionalQuestion(162, "Longest Common Prefix",
  "Return the longest prefix shared by every string in an array. Return an empty string if no prefix is shared.",
  "Start with the first string as the candidate prefix. Shorten it until each subsequent string starts with it.",
  "1. Return empty for an empty list.\n2. Compare the candidate prefix with each string.\n3. Remove its last character until it matches the beginning of that string.\n4. Return the remaining prefix.",
  String.raw`class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        if (strs.empty()) return "";
        string prefix = strs[0];
        for (int i = 1; i < static_cast<int>(strs.size()); ++i) {
            while (strs[i].compare(0, prefix.size(), prefix) != 0)
                prefix.pop_back();
            if (prefix.empty()) return "";
        }
        return prefix;
    }
};`,
  "- Time: O(total characters compared), at most O(nL).\n- Space: O(1) auxiliary, excluding the returned prefix.",
  "> Keep shortening the first string until it prefixes every other string.",
  "For flower, flow, and flight, the candidate shrinks to fl."
);

addAdditionalQuestion(163, "Reverse Words in a String",
  "Reverse the order of words in a string. Words are separated by spaces; the result must have single spaces and no leading or trailing spaces.",
  "Extract words while treating consecutive spaces as separators, then join them in reverse order.",
  "1. Read words with a whitespace-aware string stream.\n2. Store each extracted word.\n3. Append the words from last to first, placing one space between them.",
  String.raw`class Solution {
public:
    string reverseWords(string s) {
        istringstream input(s);
        vector<string> words;
        string word;
        while (input >> word) words.push_back(word);
        string result;
        for (int i = static_cast<int>(words.size()) - 1; i >= 0; --i) {
            if (!result.empty()) result += ' ';
            result += words[i];
        }
        return result;
    }
};`,
  "- Time: O(n).\n- Space: O(n) for the words and returned string.",
  "> Tokenize on whitespace, then append tokens in reverse with one separator.",
  "The words in 'the sky is blue' are appended as blue, is, sky, the."
);

addAdditionalQuestion(164, "String to Integer (atoi)",
  "Parse a string as a 32-bit signed integer: ignore leading spaces, read an optional sign and consecutive digits, stop at the first non-digit, and clamp overflow to the signed 32-bit range.",
  "Skip leading spaces, read the sign, then accumulate digits while checking the appropriate limit before each multiply-and-add.",
  "1. Skip leading spaces and read an optional sign.\n2. For each following digit, check whether appending it would exceed INT_MAX or the magnitude of INT_MIN.\n3. Clamp immediately on overflow; otherwise accumulate.\n4. Return the signed result.",
  String.raw`class Solution {
public:
    int myAtoi(string s) {
        int i = 0, n = static_cast<int>(s.size());
        while (i < n && s[i] == ' ') ++i;
        int sign = 1;
        if (i < n && (s[i] == '+' || s[i] == '-')) {
            if (s[i] == '-') sign = -1;
            ++i;
        }
        long long value = 0;
        while (i < n && isdigit(static_cast<unsigned char>(s[i]))) {
            value = value * 10 + (s[i] - '0');
            if (sign == 1 && value > INT_MAX) return INT_MAX;
            if (sign == -1 && value > static_cast<long long>(INT_MAX) + 1)
                return INT_MIN;
            ++i;
        }
        return static_cast<int>(sign * value);
    }
};`,
  "- Time: O(n) in the number of scanned characters.\n- Space: O(1).",
  "> Skip spaces, read sign, accumulate digits, and clamp as soon as the limit is exceeded.",
  "Parsing '-42xyz' stops at x and returns -42."
);

addAdditionalQuestion(165, "Find the Index of the First Occurrence in a String",
  "Return the index of the first occurrence of needle in haystack, or -1 if it does not occur. An empty needle occurs at index 0.",
  "Use the Knuth-Morris-Pratt algorithm. Its prefix table lets the search reuse matched prefix information after a mismatch instead of restarting.",
  "1. Build the prefix-function array for needle.\n2. Scan haystack while maintaining the length of the matched needle prefix.\n3. On mismatch, fall back using the prefix table.\n4. Return the start index when the full needle matches, or -1.",
  String.raw`class Solution {
public:
    int strStr(string haystack, string needle) {
        if (needle.empty()) return 0;
        vector<int> prefix(needle.size(), 0);
        for (int i = 1, matched = 0; i < static_cast<int>(needle.size()); ++i) {
            while (matched > 0 && needle[i] != needle[matched])
                matched = prefix[matched - 1];
            if (needle[i] == needle[matched]) ++matched;
            prefix[i] = matched;
        }
        for (int i = 0, matched = 0; i < static_cast<int>(haystack.size()); ++i) {
            while (matched > 0 && haystack[i] != needle[matched])
                matched = prefix[matched - 1];
            if (haystack[i] == needle[matched]) ++matched;
            if (matched == static_cast<int>(needle.size()))
                return i - matched + 1;
        }
        return -1;
    }
};`,
  "- Time: O(n + m).\n- Space: O(m), where n and m are the string lengths.",
  "> KMP uses the prefix table to avoid rescanning matched characters.",
  "After matching a prefix and encountering a mismatch, fall back to its longest proper prefix that is also a suffix."
);
