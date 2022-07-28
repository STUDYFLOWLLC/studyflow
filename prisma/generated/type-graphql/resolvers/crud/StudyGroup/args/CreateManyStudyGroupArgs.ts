import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StudyGroupCreateManyInput } from "../../../inputs/StudyGroupCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyStudyGroupArgs {
  @TypeGraphQL.Field(_type => [StudyGroupCreateManyInput], {
    nullable: false
  })
  data!: StudyGroupCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
