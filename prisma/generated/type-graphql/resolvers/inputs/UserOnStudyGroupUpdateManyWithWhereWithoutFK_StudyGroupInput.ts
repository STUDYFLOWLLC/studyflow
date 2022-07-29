import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserOnStudyGroupScalarWhereInput } from "../inputs/UserOnStudyGroupScalarWhereInput";
import { UserOnStudyGroupUpdateManyMutationInput } from "../inputs/UserOnStudyGroupUpdateManyMutationInput";

@TypeGraphQL.InputType("UserOnStudyGroupUpdateManyWithWhereWithoutFK_StudyGroupInput", {
  isAbstract: true
})
export class UserOnStudyGroupUpdateManyWithWhereWithoutFK_StudyGroupInput {
  @TypeGraphQL.Field(_type => UserOnStudyGroupScalarWhereInput, {
    nullable: false
  })
  where!: UserOnStudyGroupScalarWhereInput;

  @TypeGraphQL.Field(_type => UserOnStudyGroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserOnStudyGroupUpdateManyMutationInput;
}
