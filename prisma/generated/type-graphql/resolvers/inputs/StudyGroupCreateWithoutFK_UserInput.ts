import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserOnStudyGroupCreateNestedManyWithoutFK_StudyGroupInput } from "../inputs/UserOnStudyGroupCreateNestedManyWithoutFK_StudyGroupInput";

@TypeGraphQL.InputType("StudyGroupCreateWithoutFK_UserInput", {
  isAbstract: true
})
export class StudyGroupCreateWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  @TypeGraphQL.Field(_type => UserOnStudyGroupCreateNestedManyWithoutFK_StudyGroupInput, {
    nullable: true
  })
  FK_UserOnStudyGroup?: UserOnStudyGroupCreateNestedManyWithoutFK_StudyGroupInput | undefined;
}
