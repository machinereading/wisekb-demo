#!/bin/sh

# configurations ============================================================
main_input=$1
main_output=$2

prepro_working_dir_path="./prepro/"
semantic_working_dir_path="./SemanticRelationExtractor/"
PL1_working_dir_path="./FromTheS/"
DB2XB_working_dir_path="./DB2XB/"
process_out_dir_path="./process_out/"
b2kP_working_dir_path="./b2k_plus/"
b2kPP_working_dir_path="./b2k_plus_plus/"
a2k_working_dir_path="./a2k/"

prepro_input_path=$prepro_working_dir_path"wiki_ex.txt"
prepro_midput_B_path=$prepro_working_dir_path"data/wiki_ex_B.txt"
prepro_midput_L_path=$prepro_working_dir_path"data/wiki_ex_L.txt"
prepro_output_PL1_path=$prepro_working_dir_path"data/wiki_ex_PL1.txt"
prepro_output_PL2_path=$prepro_working_dir_path"data/wiki_ex_PL2.txt"
prepro_output_PL3_path=$prepro_working_dir_path"data/wiki_ex_PL3.txt"

prepro_output_PL5_path=$prepro_working_dir_path"data/wiki_ex_PL5.txt"

semantic_input_path=$semantic_working_dir_path"data/input/wiki_ex_PL1.txt"
semantic_output_path=$semantic_working_dir_path"data/output/pl3-out"

PL1_input_path=$PL1_working_dir_path"data/wiki_ex_PL1.txt"
PL1_output_path=$PL1_working_dir_path"data/extracted-relations.txt"

b2k_output_path="pl2_out"

b2kP_input_path="pl5_in"
b2kP_output_path="pl5-out"

b2kPP_input_path="pl6-in"
b2kPP_output_path="pl6-out"

a2k_input_path="input"
a2k_output_path="output"

DB2XB_input_path=$DB2XB_working_dir_path"data/pl_out/"
DB2XB_output_A_path=$DB2XB_working_dir_path"data/ensemble/xbtriples_scored_all"
DB2XB_output_N_path=$DB2XB_working_dir_path"data/ensemble/xbtriples_scored"

#====================================================================================

# Step 1: Pre-processing
# cp $main_input $prepro_input_path
# cd $prepro_working_dir_path
# mvn compile exec:java
# cd ../

echo "==MODULE START=="

# Step 2-1: Predicate-linking (L2K-choi)
# sudo cp $prepro_output_PL3_path $PL1_input_path
# cd $PL1_working_dir_path
# sudo mvn compile exec:java -Dexec.args="--extract-relations"
# cd ../
# sudo mv $PL1_output_path $DB2XB_input_path"pl1-out"

# Step 2-2: Predicate-linking (B2K)

#(python ./b2k/kaist_b2k_module.py $prepro_output_PL2_path $b2k_output_path;
#sudo mv $b2k_output_path $DB2XB_input_path"pl2-out") &

# Step 2-3: Predicate-linking (L2K-semantic)
#cp $prepro_output_PL3_path $semantic_input_path
#cd $semantic_working_dir_path
#mvn clean compile exec:java
#cd ../
#cp $semantic_output_path $DB2XB_input_path"pl3-out"

# Step 2-4: Predicate-linking (L2K-2016)

# Step 2-5: Predicate-linking (B2K+)
#(cp $prepro_output_PL5_path $b2kP_working_dir_path$b2kP_input_path;
#cd $b2kP_working_dir_path;
#python ./b2k+_predict.py $b2kP_input_path $b2kP_output_path;
#cd ../;
#mv $b2kP_working_dir_path$b2kP_output_path"_raw" $DB2XB_input_path"pl5-out") 

# Step 2-6: Predicate-linking (B2K++)
#(cp $prepro_output_PL5_path $b2kPP_working_dir_path$b2kPP_input_path;
#cd $b2kPP_working_dir_path;
#python ./b2k+_predict.py $b2kPP_input_path $b2kPP_output_path;
#cd ../;
#sudo mv $b2kPP_working_dir_path$b2kPP_output_path"_raw" $DB2XB_input_path"pl6-out") &

# Step 2-5: Predicate-linking (A2K)
cp $prepro_output_PL5_path $a2k_working_dir_path$a2k_input_path;
cd $a2k_working_dir_path;
python ./b2k+_predict_Client.py $a2k_input_path $a2k_output_path;
cd ../;
mv $a2k_working_dir_path$a2k_output_path"_raw" $DB2XB_input_path"pl5-out"

echo "==PARALLELING=="
WORK_PID=`jobs -l | awk '{print $2}'`
wait $WORK_PID
echo "==MODULE END=="

# Step 3: DB2XB
# cd DB2XB
# java -jar DB2XB.jar
# cd ../
# cp $DB2XB_output_N_path $main_output
# cp $DB2XB_output_A_path $main_output"_A"
