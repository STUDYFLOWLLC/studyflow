import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermCreateManyFK_SchoolInput } from "../inputs/TermCreateManyFK_SchoolInput";

@TypeGraphQL.InputType("TermCreateManyFK_SchoolInputEnvelope", {
  isAbstract: true
})
export class TermCreateManyFK_SchoolInputEnvelope {
  @TypeGraphQL.Field(_type => [TermCreateManyFK_SchoolInput], {
    nullable: false
  })
  data!: TermCreateManyFK_SchoolInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
