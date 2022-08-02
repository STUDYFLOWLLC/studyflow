import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StudyGroupCreateManyFK_UserInput } from "../inputs/StudyGroupCreateManyFK_UserInput";

@TypeGraphQL.InputType("StudyGroupCreateManyFK_UserInputEnvelope", {
  isAbstract: true
})
export class StudyGroupCreateManyFK_UserInputEnvelope {
  @TypeGraphQL.Field(_type => [StudyGroupCreateManyFK_UserInput], {
    nullable: false
  })
  data!: StudyGroupCreateManyFK_UserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
