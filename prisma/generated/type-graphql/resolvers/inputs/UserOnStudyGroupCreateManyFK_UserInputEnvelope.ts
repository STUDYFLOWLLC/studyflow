import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserOnStudyGroupCreateManyFK_UserInput } from "../inputs/UserOnStudyGroupCreateManyFK_UserInput";

@TypeGraphQL.InputType("UserOnStudyGroupCreateManyFK_UserInputEnvelope", {
  isAbstract: true
})
export class UserOnStudyGroupCreateManyFK_UserInputEnvelope {
  @TypeGraphQL.Field(_type => [UserOnStudyGroupCreateManyFK_UserInput], {
    nullable: false
  })
  data!: UserOnStudyGroupCreateManyFK_UserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
