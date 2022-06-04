import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermCreateManyFK_UserInput } from "../inputs/TermCreateManyFK_UserInput";

@TypeGraphQL.InputType("TermCreateManyFK_UserInputEnvelope", {
  isAbstract: true
})
export class TermCreateManyFK_UserInputEnvelope {
  @TypeGraphQL.Field(_type => [TermCreateManyFK_UserInput], {
    nullable: false
  })
  data!: TermCreateManyFK_UserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
