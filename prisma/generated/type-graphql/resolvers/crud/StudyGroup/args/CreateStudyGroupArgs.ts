import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudyGroupCreateInput } from "../../../inputs/StudyGroupCreateInput";

@TypeGraphQL.ArgsType()
export class CreateStudyGroupArgs {
  @TypeGraphQL.Field(_type => StudyGroupCreateInput, {
    nullable: false
  })
  data!: StudyGroupCreateInput;
}
