
CREATE TABLE `soundtx` (
  `soundid` int(100) NOT NULL,
  `soundtext` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- Indexes for table `soundtx`
ALTER TABLE `soundtx`
  ADD PRIMARY KEY (`soundid`);


-- AUTO_INCREMENT for table `soundtx`
ALTER TABLE `soundtx`
  MODIFY `soundid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;
