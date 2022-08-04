import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorCreateManyFK_SchoolInput } from "../inputs/ProfessorCreateManyFK_SchoolInput";

@TypeGraphQL.InputType("ProfessorCreateManyFK_SchoolInputEnvelope", {
  isAbstract: true
})
export class ProfessorCreateManyFK_SchoolInputEnvelope {
  @TypeGraphQL.Field(_type => [ProfessorCreateManyFK_SchoolInput], {
    nullable: false
  })
  data!: ProfessorCreateManyFK_SchoolInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
