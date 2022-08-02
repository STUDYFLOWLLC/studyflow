import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserOnStudyGroupCreateManyFK_StudyGroupInput } from "../inputs/UserOnStudyGroupCreateManyFK_StudyGroupInput";

@TypeGraphQL.InputType("UserOnStudyGroupCreateManyFK_StudyGroupInputEnvelope", {
  isAbstract: true
})
export class UserOnStudyGroupCreateManyFK_StudyGroupInputEnvelope {
  @TypeGraphQL.Field(_type => [UserOnStudyGroupCreateManyFK_StudyGroupInput], {
    nullable: false
  })
  data!: UserOnStudyGroupCreateManyFK_StudyGroupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
