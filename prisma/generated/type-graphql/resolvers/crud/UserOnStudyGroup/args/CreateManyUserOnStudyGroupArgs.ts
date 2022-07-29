import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserOnStudyGroupCreateManyInput } from "../../../inputs/UserOnStudyGroupCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserOnStudyGroupArgs {
  @TypeGraphQL.Field(_type => [UserOnStudyGroupCreateManyInput], {
    nullable: false
  })
  data!: UserOnStudyGroupCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
